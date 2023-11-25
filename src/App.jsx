import React from 'react'
import Navbar from './components/navbar/Navbar'
import LeftSidebar from './components/leftsidebar/LeftSidebar.jsx'
import PreviewConstructor from './components/pages/PreviewConstructor'
import PageSelector from './components/page-selector/PageSelector'
import RightSidebar from './components/rightsidebar/RightSidebar'
import { defaultValues, emptyRowData, emptyButtonData } from './DefaultValues'
import { nanoid } from 'nanoid'

function App() {
  const [projectName, setProjectName] = React.useState(
    defaultValues.projectName,
  )
  const projectNameFuncs = {
    projectName: projectName,
    onChangeProjectName: (event) => {
      setProjectName(event.target.value)
    },
  }

  const [allowEdit, setAllowEdit] = React.useState(defaultValues.allowEdit)

  const [maxButtonsAmount, setMaxButtonsAmount] = React.useState(
    defaultValues.maxButtonsAmount,
  )
  const maxButtonsAmountFuncs = {
    allowEdit: allowEdit,
    maxButtonsAmount: maxButtonsAmount,
    incrementMaxButtonsAmount: () => {
      allowEdit &&
        setMaxButtonsAmount((prevState) => {
          return prevState < defaultValues.maxButtonsAmount
            ? prevState + 1
            : prevState
        })
    },
    decrementMaxButtonsAmount: () => {
      allowEdit &&
        setMaxButtonsAmount((prevState) => {
          return prevState > 1 ? prevState - 1 : prevState
        })
    },
  }

  const [maxButtonsInRow, setMaxButtonsInRow] = React.useState(
    defaultValues.maxButtonsInRow,
  )
  const maxButtonsInRowFuncs = {
    allowEdit: allowEdit,
    maxButtonsInRow: maxButtonsInRow,
    incrementMaxButtonsInRow: () => {
      allowEdit &&
        setMaxButtonsInRow((prevState) => {
          return prevState < defaultValues.maxButtonsInRow
            ? prevState + 1
            : prevState
        })
    },
    decrementMaxButtonsInRow: () => {
      allowEdit &&
        setMaxButtonsInRow((prevState) => {
          return prevState > 1 ? prevState - 1 : prevState
        })
    },
  }

  const [maxRows, setMaxRows] = React.useState(defaultValues.maxRows)
  const maxRowsFuncs = {
    allowEdit: allowEdit,
    maxRows: maxRows,
    incrementMaxRows: () => {
      allowEdit &&
        setMaxRows((prevState) => {
          return prevState < defaultValues.maxRows ? prevState + 1 : prevState
        })
    },
    decrementMaxRows: () => {
      allowEdit &&
        setMaxRows((prevState) => {
          return prevState > 1 ? prevState - 1 : prevState
        })
    },
  }

  const [photoExtensions, setPhotoExtensions] = React.useState(
    defaultValues.allowedPhotoExtensions,
  )
  const [newPhotoExtensionValue, setNewPhotoExtensionValue] = React.useState('')
  const photoExtensionsFuncs = {
    photoExtensions: photoExtensions,
    newPhotoExtensionValue: newPhotoExtensionValue,
    onChangeNewPhotoExtension: (event) => {
      setNewPhotoExtensionValue(event.target.value)
    },
    removePhotoExtension: (itemId) => {
      setPhotoExtensions((prevState) =>
        prevState.filter((item) => item.id !== itemId),
      )
    },
    addPhotoExtension: (itemId) => {
      const strippedItemId = itemId.replace(/\s/g, '')
      if (strippedItemId) {
        setPhotoExtensions((prevState) => {
          const newState = prevState.filter(
            (item) => item.id !== strippedItemId,
          )
          return [...newState, { id: strippedItemId, isChecked: true }]
        })
      }
      setNewPhotoExtensionValue('')
    },
    togglePhotoExtension: (itemId) => {
      setPhotoExtensions((prevState) =>
        prevState.map((item) =>
          item.id === itemId
            ? { ...item, isChecked: !item.isChecked }
            : { ...item },
        ),
      )
    },
  }

  const [fileExtensions, setFileExtensions] = React.useState(
    defaultValues.allowedFileExtensions,
  )
  const [newFileExtensionValue, setNewFileExtensionValue] = React.useState('')
  const fileExtensionsFuncs = {
    fileExtensions: fileExtensions,
    newFileExtensionValue: newFileExtensionValue,
    onChangeNewFileExtension: (event) => {
      setNewFileExtensionValue(event.target.value)
    },
    removeFileExtension: (itemId) => {
      setFileExtensions((prevState) =>
        prevState.filter((item) => item.id !== itemId),
      )
    },
    addFileExtension: (itemId) => {
      const strippedItemId = itemId.replace(/\s/g, '')
      if (strippedItemId) {
        setFileExtensions((prevState) => {
          const newState = prevState.filter(
            (item) => item.id !== strippedItemId,
          )
          return [...newState, { id: strippedItemId, isChecked: true }]
        })
      }
      setNewFileExtensionValue('')
    },
    toggleFileExtension: (itemId) => {
      setFileExtensions((prevState) =>
        prevState.map((item) =>
          item.id === itemId
            ? { ...item, isChecked: !item.isChecked }
            : { ...item },
        ),
      )
    },
  }

  const [debugState, setDebugState] = React.useState(defaultValues.debugState)
  const debugStateFuncs = {
    debugState: debugState,
    toggleDebugState: () => {
      setDebugState((prevState) => !prevState)
    },
  }

  const [previewMode, setPreviewMode] = React.useState(
    defaultValues.previewMode,
  )
  const previewModeFuncs = {
    previewMode: previewMode,
    togglePreviewMode: () => {
      setPreviewMode((prevState) => !prevState)
    },
  }

  const [pages, setPages] = React.useState(defaultValues.pages)
  const [currentPageId, setCurrentPageId] = React.useState('')

  const pagesFuncs = {
    previewMode: previewMode,
    limits: {
      maxRows: maxRows,
      maxButtonsInRow: maxButtonsInRow,
      maxButtonsAmount: maxButtonsAmount,
    },
    pages: pages,
    currentPageId: currentPageId,
    currentPage: pages.find((page) => page.id === currentPageId),
    getCurrentPage: () =>
      pagesFuncs.pages.find((page) => page.id === currentPageId),
    changeCurrentPage: (pageInternalId) => {
      setCurrentPageId(pageInternalId)
    },
    addEmptyPage: () => {
      const newPage = {
        ...defaultValues.emptyPageData,
        id: nanoid(),
      }
      setAllowEdit(false)
      setCurrentPageId(newPage.id)
      setPages((prevState) => [...prevState, newPage])
    },
    removePage: (pageId) => {
      pagesFuncs.pages.length - 1 === 0 && setAllowEdit(true)
      setCurrentPageId(
        pagesFuncs.pages.filter((page) => page.id !== pageId)[0]?.id || '',
      )
      setPages((prevState) => [
        ...prevState.filter((page) => page.id !== pageId),
      ])
    },
    getPagesIds: () => [pages.map((page) => page.pageId)],
    isPageIdUnique: (pageId) =>
      pages.filter((page) => page.pageId === pageId).length === 1,
    changeCurrentPageField: (name, value) => {
      setPages((prevState) => {
        const prevPageState = prevState.find(
          (page) => page.id === currentPageId,
        )
        const prevPagesStateWithoutCurrentPage = prevState.filter(
          (page) => page !== prevPageState,
        )
        const newPageState = {
          ...prevPageState,
          [name]: value,
        }
        return [...prevPagesStateWithoutCurrentPage, newPageState]
      })
    },
    onChangeCurrentPageText: (event) => {
      const { name, value } = event.target
      pagesFuncs.changeCurrentPageField(name, value)
    },
    onChangeCurrentPageId: (event) => {
      const { name, value } = event.target
      pagesFuncs.changeCurrentPageField(name, value)
    },
    errors: {
      get: {
        getPageErrors: () => {
          const currentPageErrors = pagesFuncs.currentPage.errorsOnPage
          return currentPageErrors
        },
        getPageErrorsWithoutCurrentError: (errorText) => {
          const oldErrors = pagesFuncs.errors.get.getPageErrors()
          const oldErrorsWithoutCurrentError = oldErrors.filter(
            (oldError) => oldError !== errorText,
          )
          return oldErrorsWithoutCurrentError
        },
      },
      update: {
        addPageError: (errorText) => {
          const name = 'errorsOnPage'
          const currentPageErrors = pagesFuncs.errors.get.getPageErrors()
          const newPageErrors = [...currentPageErrors, errorText]
          pagesFuncs.changeCurrentPageField(name, newPageErrors)
        },
        removePageError: (errorText) => {
          const name = 'errorsOnPage'
          const oldErrorsWithoutCurrentError =
            pagesFuncs.errors.get.getPageErrorsWithoutCurrentError(errorText)
          pagesFuncs.changeCurrentPageField(name, oldErrorsWithoutCurrentError)
        },
        checkConditionAndUpdateError: (cond, errorText) => {
          React.useEffect(() => {
            const isIncludes = pagesFuncs.errors.get
              .getPageErrors()
              .includes(errorText)
            if (cond) {
              if (!isIncludes) {
                pagesFuncs.errors.update.addPageError(errorText)
              }
            } else {
              if (isIncludes) {
                pagesFuncs.errors.update.removePageError(errorText)
              }
            }
          }, [pages, pagesFuncs.currentPage])
        },
      },
    },
    keyboard: {
      maxButtonsAmount: maxButtonsAmount,
      maxButtonsInRow: maxButtonsInRow,
      maxRows: maxRows,
      currentPageRows: () => {
        const currentPage = pagesFuncs.currentPage
        const currentPageRows = currentPage.rows
        return currentPageRows
      },
      changeType: (newKeyboardType) => {
        pagesFuncs.currentPage.keyboardType !== newKeyboardType &&
          pagesFuncs.changeCurrentPageField('keyboardType', newKeyboardType)
      },
      countButtonsAmount: () => {
        let buttonsAmount = 0
        pagesFuncs.keyboard
          .currentPageRows()
          .forEach((row) => (buttonsAmount += row.buttons.length))
        return buttonsAmount
      },
      countRowsAmount: () => {
        let rowsAmount = 0
        pagesFuncs.keyboard.currentPageRows().forEach((row) => {
          if (row.buttons.length) rowsAmount += 1
        })
        return rowsAmount
      },
      findCurrentRow: (rowNum) => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const currentRow = oldRows.find((row) => row.rowNum === rowNum)
        return currentRow
      },
      findCurrentButton: (rowNum, buttonNum, buttonId) => {
        const currentRow = pagesFuncs.keyboard.findCurrentRow(rowNum)
        const currentButton = currentRow.buttons.find(
          (button) => button.num === buttonNum && button.id === buttonId,
        )
        return currentButton
      },
      getCurrentRowWithoutCurrentButton: (rowNum, buttonNum, buttonId) => {
        const currentRow = pagesFuncs.keyboard.findCurrentRow(rowNum)
        const currentButton = pagesFuncs.keyboard.findCurrentButton(
          rowNum,
          buttonNum,
          buttonId,
        )
        const newRow = {
          ...currentRow,
          buttons: currentRow.buttons.filter(
            (button) => button !== currentButton,
          ),
        }
        return newRow
      },
      getOldRowsWithoutCurrentRow: (rowNum) => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const currentRow = pagesFuncs.keyboard.findCurrentRow(rowNum)
        const OldRowsWithoutCurrentRow = oldRows.filter(
          (row) => row !== currentRow,
        )
        return OldRowsWithoutCurrentRow
      },
      getNewEmptyRow: () => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const newRow = { ...emptyRowData, rowNum: oldRows.length }
        return newRow
      },
      getNewButton: (rowNum) => {
        const currentRow = pagesFuncs.keyboard.findCurrentRow(rowNum)
        const currentRowButtons = currentRow.buttons
        const newCurrentRowButtons = [
          ...currentRowButtons,
          {
            ...emptyButtonData,
            id: nanoid(),
            num: currentRowButtons.length,
          },
        ]
        const newCurrentRow = { ...currentRow, buttons: newCurrentRowButtons }
        return newCurrentRow
      },
      addEmptyRow: () => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const newRow = pagesFuncs.keyboard.getNewEmptyRow()
        const newRows = [...oldRows, newRow]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      addEmptyButtonInRow: (rowNum) => {
        const oldRowsWithoutCurrentRow =
          pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(rowNum)
        const newCurrentRow = pagesFuncs.keyboard.getNewButton(rowNum)
        const newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      addButtonInRow: (rowNum, button) => {
        const oldCurrentRow = pagesFuncs.keyboard.findCurrentRow(rowNum)
        const oldRowsWithoutCurrentRow =
          pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(rowNum)
        const newCurrentRow = {
          ...oldCurrentRow,
          buttons: [...oldCurrentRow.buttons, button],
        }
        const newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      addEmptyButtonAndRow: (rowNum) => {
        const oldRowsWithoutCurrentRow =
          pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(rowNum)
        const newCurrentRow = pagesFuncs.keyboard.getNewButton(rowNum)
        const newEmptyRow = pagesFuncs.keyboard.getNewEmptyRow()
        const nextRow = pagesFuncs.keyboard.findCurrentRow(rowNum + 1)
        let newRows
        if (nextRow && nextRow.buttons) {
          newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
        } else {
          newRows = [...oldRowsWithoutCurrentRow, newCurrentRow, newEmptyRow]
        }
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      button: {
        getCurrentButtonField: (buttonRow, buttonNum, buttonId, field) => {
          return pagesFuncs.keyboard.findCurrentButton(
            buttonRow,
            buttonNum,
            buttonId,
          )?.[field]
        },
        onChangeButtonField: (buttonRow, buttonNum, buttonId, field, value) => {
          const oldCurrentButton = pagesFuncs.keyboard.findCurrentButton(
            buttonRow,
            buttonNum,
            buttonId,
          )
          const currentRowWithoutCurrentButton =
            pagesFuncs.keyboard.getCurrentRowWithoutCurrentButton(
              buttonRow,
              buttonNum,
              buttonId,
            )
          const oldRowsWithoutCurrentRow =
            pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(buttonRow)
          const newCurrentButton = {
            ...oldCurrentButton,
            [field]: value,
          }
          const newCurrentRow = {
            ...currentRowWithoutCurrentButton,
            buttons: [
              ...currentRowWithoutCurrentButton.buttons,
              newCurrentButton,
            ],
          }
          const newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
          pagesFuncs.changeCurrentPageField('rows', newRows)
        },
        removeButton: (buttonRow, buttonNum, buttonId) => {
          const currentRowWithoutCurrentButton =
            pagesFuncs.keyboard.getCurrentRowWithoutCurrentButton(
              buttonRow,
              buttonNum,
              buttonId,
            )
          const nextRow = pagesFuncs.keyboard.findCurrentRow(buttonRow + 1)
          const sortedCurrentRowWithoutCurrentButton = {
            ...currentRowWithoutCurrentButton,
            buttons: currentRowWithoutCurrentButton.buttons.map(
              (button, buttonNum) => ({ ...button, num: buttonNum }),
            ),
          }
          const oldRowsWithoutCurrentRow =
            pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(buttonRow)
          const newCurrentRow = {
            ...sortedCurrentRowWithoutCurrentButton,
          }
          let newRows
          if (
            newCurrentRow.buttons.length === 0 &&
            nextRow &&
            nextRow.buttons &&
            nextRow.buttons.length === 0
          ) {
            const sortedOldRowsWithoutCurrentRow = oldRowsWithoutCurrentRow.map(
              (row, rowNum) => ({ ...row, rowNum: rowNum }),
            )
            newRows = [...sortedOldRowsWithoutCurrentRow]
          } else {
            newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
          }
          pagesFuncs.changeCurrentPageField('rows', newRows)
        },
        label: {
          get: {
            currentButtonLabel: (buttonRow, buttonNum, buttonId) => {
              return pagesFuncs.keyboard.button.getCurrentButtonField(
                buttonRow,
                buttonNum,
                buttonId,
                'label',
              )
            },
            currentButtonIsCustomLabel: (buttonRow, buttonNum, buttonId) => {
              return pagesFuncs.keyboard.button.getCurrentButtonField(
                buttonRow,
                buttonNum,
                buttonId,
                'isCustomLabel',
              )
            },
          },
          update: {
            toggleIsCustomLabel: (buttonRow, buttonNum, buttonId) => {
              const oldButtonIsCustomLabel =
                pagesFuncs.keyboard.button.label.get.currentButtonIsCustomLabel(
                  buttonRow,
                  buttonNum,
                  buttonId,
                )
              const newButtonIsCustomLabel = !oldButtonIsCustomLabel
              pagesFuncs.keyboard.button.onChangeButtonField(
                buttonRow,
                buttonNum,
                buttonId,
                'isCustomLabel',
                newButtonIsCustomLabel,
              )
            },
          },
        },
        color: {
          update: (buttonRow, buttonNum, buttonId, color) => {
            pagesFuncs.keyboard.button.onChangeButtonField(
              buttonRow,
              buttonNum,
              buttonId,
              'color',
              color,
            )
          },
          get: (buttonRow, buttonNum, buttonId) => {
            return pagesFuncs.keyboard.button.getCurrentButtonField(
              buttonRow,
              buttonNum,
              buttonId,
              'color',
            )
          },
        },
        position: {
          get: {
            allButtons: () => {
              if (!pagesFuncs.currentPage) return []
              let allRowsArr = []
              pagesFuncs.currentPage.rows.forEach((row) => {
                let allButtonsArr = []
                row.buttons.forEach((button) => {
                  allButtonsArr.push({
                    row: row.rowNum,
                    num: button.num,
                    id: button.id,
                  })
                })
                allRowsArr.push(allButtonsArr)
              })
              return allRowsArr
            },
          },
          update: {
            replace: (
              currentButtonRow,
              currentButtonNum,
              currentButtonId,
              moveToButtonRow,
              moveToButtonNum,
              moveToButtonId,
            ) => {
              const currentButton = pagesFuncs.keyboard.findCurrentButton(
                currentButtonRow,
                currentButtonNum,
                currentButtonId,
              )
              const moveToButton = pagesFuncs.keyboard.findCurrentButton(
                moveToButtonRow,
                moveToButtonNum,
                moveToButtonId,
              )
              const oldRows = pagesFuncs.currentPage.rows
              const filteredOldRows = oldRows.map((row) => ({
                ...row,
                buttons: row.buttons.filter(
                  (button) =>
                    button.id !== currentButton.id &&
                    button.id !== moveToButton.id,
                ),
              }))
              const newCurrentButton = {
                ...currentButton,
                num: moveToButton.num,
              }
              const newMoveToButton = {
                ...moveToButton,
                num: currentButton.num,
              }
              const newRows = filteredOldRows.map((row) => {
                if (currentButtonRow === moveToButtonRow) {
                  if (row.rowNum === currentButtonRow) {
                    return {
                      ...row,
                      buttons: [
                        ...row.buttons,
                        newMoveToButton,
                        newCurrentButton,
                      ],
                    }
                  } else return row
                }
                if (row.rowNum === moveToButtonRow) {
                  return { ...row, buttons: [...row.buttons, newCurrentButton] }
                } else if (row.rowNum === currentButtonRow) {
                  return { ...row, buttons: [...row.buttons, newMoveToButton] }
                } else return row
              })
              pagesFuncs.changeCurrentPageField('rows', newRows)
            },
            replaceToNew: (
              currentButtonRow,
              currentButtonNum,
              currentButtonId,
              moveToButtonRow,
            ) => {
              const currentButton = pagesFuncs.keyboard.findCurrentButton(
                currentButtonRow,
                currentButtonNum,
                currentButtonId,
              )
              const oldRows = pagesFuncs.currentPage.rows
              const filteredOldRows = oldRows.map((row) => ({
                ...row,
                buttons: row.buttons.filter(
                  (button) => button.id !== currentButton.id,
                ),
              }))
              const newCurrentButtonNum = oldRows.filter(
                (row) => row.rowNum === moveToButtonRow,
              )[0].buttons.length
              const newCurrentButton = {
                ...currentButton,
                num: newCurrentButtonNum,
              }
              let newRows = filteredOldRows.map((row) => {
                if (row.rowNum === moveToButtonRow) {
                  return {
                    ...row,
                    buttons: [...row.buttons, newCurrentButton].map(
                      (button, buttonIndex) => ({
                        ...button,
                        num: buttonIndex,
                      }),
                    ),
                  }
                } else
                  return {
                    ...row,
                    buttons: row.buttons.map((button, buttonIndex) => ({
                      ...button,
                      num: buttonIndex,
                    })),
                  }
              })
              if (newRows[newRows.length - 1].buttons.length > 0) {
                newRows.push({
                  ...emptyRowData,
                  rowNum: newRows.length,
                  buttons: [],
                })
              }
              pagesFuncs.changeCurrentPageField('rows', newRows)
            },
          },
        },
      },
    },
  }

  React.useEffect(() => {
    pagesFuncs.currentPage &&
      pagesFuncs.currentPage.rows.forEach((row, i) => {
        const nextRow = pagesFuncs.currentPage.rows[i + 1]
        if (
          nextRow &&
          row.buttons.length === 0 &&
          nextRow.buttons.length === 0
        ) {
          const oldRowsWithoutCurrentRow =
            pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(row.rowNum)
          const sortedOldRowsWithoutCurrentRow = oldRowsWithoutCurrentRow.map(
            (row, rowNum) => ({
              ...row,
              rowNum: rowNum,
            }),
          )
          pagesFuncs.changeCurrentPageField(
            'rows',
            sortedOldRowsWithoutCurrentRow,
          )
        }
      })

    pagesFuncs.currentPage &&
      pagesFuncs.keyboard.countButtonsAmount() === 0 &&
      pagesFuncs.keyboard.changeType('empty')
  }, [pagesFuncs.pages, pagesFuncs.currentPage])

  return (
    <>
      <Navbar />
      <div className='main'>
        <LeftSidebar
          projectNameFuncs={projectNameFuncs}
          maxButtonsAmountFuncs={maxButtonsAmountFuncs}
          maxButtonsInRowFuncs={maxButtonsInRowFuncs}
          maxRowsFuncs={maxRowsFuncs}
          photoExtensionsFuncs={photoExtensionsFuncs}
          fileExtensionsFuncs={fileExtensionsFuncs}
          debugStateFuncs={debugStateFuncs}
          previewModeFuncs={previewModeFuncs}
        />
        <PreviewConstructor
          projectNameFuncs={projectNameFuncs}
          pagesFuncs={pagesFuncs}
        />
        {pagesFuncs.pages.length > 0 && (
          <PageSelector pagesFuncs={pagesFuncs} />
        )}
        {pagesFuncs.pages.length > 0 && !previewMode && (
          <RightSidebar pagesFuncs={pagesFuncs} />
        )}
      </div>
    </>
  )
}

export default App
