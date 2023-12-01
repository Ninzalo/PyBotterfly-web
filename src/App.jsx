import React from 'react'
import Navbar from './components/navbar/Navbar'
import LeftSidebar from './components/leftsidebar/LeftSidebar.jsx'
import PreviewConstructor from './components/pages/PreviewConstructor'
import PageSelector from './components/page-selector/PageSelector'
import RightSidebar from './components/rightsidebar/RightSidebar'
import { defaultValues, emptyRowData, emptyButtonData } from './DefaultValues'
import { nanoid } from 'nanoid'

function App() {
  const [isLeftSidebarOpened, setIsLeftSidebarOpened] = React.useState(true)
  const leftSidebarFuncs = {
    isLeftSidebarOpened: isLeftSidebarOpened,
    toggleLeftSidebarOpened: () => {
      setIsLeftSidebarOpened((prevState) => !prevState)
    },
  }

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
    constants: {
      previewMode: previewMode,
    },
    pages: {
      get: {
        pages: pages,
        isPageIdUnique: (pageId) =>
          pages.filter((page) => page.pageId === pageId).length === 1,
      },

      update: {
        addEmptyPage: () => {
          const newPage = {
            ...defaultValues.emptyPageData,
            id: nanoid(),
          }
          setAllowEdit(false)
          setCurrentPageId(newPage.id)
          setPages((prevState) => [...prevState, newPage])
        },

        removePageById: (pageId) => {
          pagesFuncs.pages.get.pages.length - 1 === 0 && setAllowEdit(true)
          setCurrentPageId(
            pagesFuncs.pages.get.pages.filter((page) => page.id !== pageId)[0]
              ?.id || '',
          )
          setPages((prevState) => [
            ...prevState.filter((page) => page.id !== pageId),
          ])
        },
      },
      currentPage: {
        get: {
          currentPageInternalId: () => currentPageId,
          currentPage: () => {
            const page = pages.find((page) => page.id === currentPageId)
            return page
          },
          currentPageText: () =>
            pagesFuncs.pages.currentPage.get.currentPage().text,
          currentPageId: () =>
            pagesFuncs.pages.currentPage.get.currentPage().pageId,
        },

        update: {
          currentPage: (pageInternalId) => {
            setCurrentPageId(pageInternalId)
          },

          field: (name, value) => {
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
            pagesFuncs.pages.currentPage.update.field(name, value)
          },

          onChangeCurrentPageId: (event) => {
            const { name, value } = event.target
            pagesFuncs.pages.currentPage.update.field(name, value)
          },
        },
        errors: {
          get: {
            pageErrors: () => {
              const currentPageErrors =
                pagesFuncs.pages.currentPage.get.currentPage().errorsOnPage
              return currentPageErrors
            },

            pageErrorsWithoutCurrentError: (errorText) => {
              const oldErrors =
                pagesFuncs.pages.currentPage.errors.get.pageErrors()
              const oldErrorsWithoutCurrentError = oldErrors.filter(
                (oldError) => oldError !== errorText,
              )
              return oldErrorsWithoutCurrentError
            },
          },

          update: {
            addPageError: (errorText) => {
              const name = 'errorsOnPage'
              const currentPageErrors =
                pagesFuncs.pages.currentPage.errors.get.pageErrors()
              const newPageErrors = [...currentPageErrors, errorText]
              pagesFuncs.pages.currentPage.update.field(name, newPageErrors)
            },

            removePageError: (errorText) => {
              const name = 'errorsOnPage'
              const oldErrorsWithoutCurrentError =
                pagesFuncs.pages.currentPage.errors.get.pageErrorsWithoutCurrentError(
                  errorText,
                )
              pagesFuncs.pages.currentPage.update.field(
                name,
                oldErrorsWithoutCurrentError,
              )
            },

            checkConditionAndUpdateError: (cond, errorText) => {
              React.useEffect(() => {
                const isIncludes = pagesFuncs.pages.currentPage.errors.get
                  .pageErrors()
                  .includes(errorText)
                if (cond) {
                  if (!isIncludes) {
                    pagesFuncs.pages.currentPage.errors.update.addPageError(
                      errorText,
                    )
                  }
                } else {
                  if (isIncludes) {
                    pagesFuncs.pages.currentPage.errors.update.removePageError(
                      errorText,
                    )
                  }
                }
              }, [
                pagesFuncs.pages.get.pages,
                pagesFuncs.pages.currentPage.get.currentPage(),
              ])
            },
          },
        },
        keyboard: {
          limits: {
            get: {
              maxButtonsAmount: maxButtonsAmount,
              maxButtonsInRow: maxButtonsInRow,
              maxRows: maxRows,
            },
          },

          type: {
            get: {
              type: () =>
                pagesFuncs.pages.currentPage.get.currentPage().keyboardType,
            },
            update: {
              changeType: (newKeyboardType) => {
                pagesFuncs.pages.currentPage.keyboard.type.get.type() !==
                  newKeyboardType &&
                  pagesFuncs.pages.currentPage.update.field(
                    'keyboardType',
                    newKeyboardType,
                  )
              },
            },
          },
          rows: {
            get: {
              currentPageRows: () => {
                const currentPage =
                  pagesFuncs.pages.currentPage.get.currentPage()
                const currentPageRows = currentPage.rows
                return currentPageRows
              },

              countRowsAmount: () => {
                let rowsAmount = 0
                pagesFuncs.pages.currentPage.keyboard.rows.get
                  .currentPageRows()
                  .forEach((row) => {
                    if (row.buttons.length) rowsAmount += 1
                  })
                return rowsAmount
              },

              findCurrentRow: (rowNum) => {
                const oldRows =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()
                const currentRow = oldRows.find((row) => row.rowNum === rowNum)
                return currentRow
              },

              getCurrentRowWithoutCurrentButton: (
                rowNum,
                buttonNum,
                buttonId,
              ) => {
                const currentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                    rowNum,
                  )
                const currentButton =
                  pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
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
                const oldRows =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()
                const currentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                    rowNum,
                  )
                const OldRowsWithoutCurrentRow = oldRows.filter(
                  (row) => row !== currentRow,
                )
                return OldRowsWithoutCurrentRow
              },

              getNewEmptyRow: () => {
                const oldRows =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()
                const newRow = { ...emptyRowData, rowNum: oldRows.length }
                return newRow
              },
            },

            update: {
              addEmptyButtonInRow: (rowNum) => {
                const oldRowsWithoutCurrentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.getOldRowsWithoutCurrentRow(
                    rowNum,
                  )
                const newCurrentRow =
                  pagesFuncs.pages.currentPage.keyboard.buttons.get.getNewButton(
                    rowNum,
                  )
                const newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
                pagesFuncs.pages.currentPage.update.field('rows', newRows)
              },

              addEmptyButtonAndRow: (rowNum) => {
                const oldRowsWithoutCurrentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.getOldRowsWithoutCurrentRow(
                    rowNum,
                  )
                const newCurrentRow =
                  pagesFuncs.pages.currentPage.keyboard.buttons.get.getNewButton(
                    rowNum,
                  )
                const newEmptyRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.getNewEmptyRow()
                const nextRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                    rowNum + 1,
                  )
                let newRows
                if (nextRow && nextRow.buttons) {
                  newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
                } else {
                  newRows = [
                    ...oldRowsWithoutCurrentRow,
                    newCurrentRow,
                    newEmptyRow,
                  ]
                }
                pagesFuncs.pages.currentPage.update.field('rows', newRows)
              },
            },
          },
          buttons: {
            get: {
              countButtonsAmount: () => {
                let buttonsAmount = 0
                pagesFuncs.pages.currentPage.keyboard.rows.get
                  .currentPageRows()
                  .forEach((row) => (buttonsAmount += row.buttons.length))
                return buttonsAmount
              },

              findCurrentButton: (rowNum, buttonNum, buttonId) => {
                const currentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                    rowNum,
                  )
                const currentButton = currentRow.buttons.find(
                  (button) =>
                    button.num === buttonNum && button.id === buttonId,
                )
                return currentButton
              },

              getNewButton: (rowNum) => {
                const currentRow =
                  pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                    rowNum,
                  )
                const currentRowButtons = currentRow.buttons
                const newCurrentRowButtons = [
                  ...currentRowButtons,
                  {
                    ...emptyButtonData,
                    id: nanoid(),
                    num: currentRowButtons.length,
                  },
                ]
                const newCurrentRow = {
                  ...currentRow,
                  buttons: newCurrentRowButtons,
                }
                return newCurrentRow
              },
            },

            update: {},
          },
          button: {
            remove: {
              get: {},

              update: {
                removeButton: (buttonRow, buttonNum, buttonId) => {
                  const currentRowWithoutCurrentButton =
                    pagesFuncs.pages.currentPage.keyboard.rows.get.getCurrentRowWithoutCurrentButton(
                      buttonRow,
                      buttonNum,
                      buttonId,
                    )
                  const nextRow =
                    pagesFuncs.pages.currentPage.keyboard.rows.get.findCurrentRow(
                      buttonRow + 1,
                    )
                  const sortedCurrentRowWithoutCurrentButton = {
                    ...currentRowWithoutCurrentButton,
                    buttons: currentRowWithoutCurrentButton.buttons.map(
                      (button, buttonNum) => ({ ...button, num: buttonNum }),
                    ),
                  }
                  const oldRowsWithoutCurrentRow =
                    pagesFuncs.pages.currentPage.keyboard.rows.get.getOldRowsWithoutCurrentRow(
                      buttonRow,
                    )
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
                    const sortedOldRowsWithoutCurrentRow =
                      oldRowsWithoutCurrentRow.map((row, rowNum) => ({
                        ...row,
                        rowNum: rowNum,
                      }))
                    newRows = [...sortedOldRowsWithoutCurrentRow]
                  } else {
                    newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
                  }
                  pagesFuncs.pages.currentPage.update.field('rows', newRows)
                },
              },
            },

            field: {
              get: {
                getCurrentButtonField: (
                  buttonRow,
                  buttonNum,
                  buttonId,
                  field,
                ) => {
                  return pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
                    buttonRow,
                    buttonNum,
                    buttonId,
                  )?.[field]
                },
              },

              update: {
                onChangeButtonField: (
                  buttonRow,
                  buttonNum,
                  buttonId,
                  field,
                  value,
                ) => {
                  const oldCurrentButton =
                    pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
                      buttonRow,
                      buttonNum,
                      buttonId,
                    )
                  const currentRowWithoutCurrentButton =
                    pagesFuncs.pages.currentPage.keyboard.rows.get.getCurrentRowWithoutCurrentButton(
                      buttonRow,
                      buttonNum,
                      buttonId,
                    )
                  const oldRowsWithoutCurrentRow =
                    pagesFuncs.pages.currentPage.keyboard.rows.get.getOldRowsWithoutCurrentRow(
                      buttonRow,
                    )
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
                  pagesFuncs.pages.currentPage.update.field('rows', newRows)
                },
              },

              label: {
                get: {
                  currentButtonLabel: (buttonRow, buttonNum, buttonId) => {
                    return pagesFuncs.pages.currentPage.keyboard.button.field.get.getCurrentButtonField(
                      buttonRow,
                      buttonNum,
                      buttonId,
                      'label',
                    )
                  },
                  currentButtonIsCustomLabel: (
                    buttonRow,
                    buttonNum,
                    buttonId,
                  ) => {
                    return pagesFuncs.pages.currentPage.keyboard.button.field.get.getCurrentButtonField(
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
                      pagesFuncs.pages.currentPage.keyboard.button.field.label.get.currentButtonIsCustomLabel(
                        buttonRow,
                        buttonNum,
                        buttonId,
                      )
                    const newButtonIsCustomLabel = !oldButtonIsCustomLabel
                    pagesFuncs.pages.currentPage.keyboard.button.field.update.onChangeButtonField(
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
                get: {
                  currentColor: (buttonRow, buttonNum, buttonId) => {
                    return pagesFuncs.pages.currentPage.keyboard.button.field.get.getCurrentButtonField(
                      buttonRow,
                      buttonNum,
                      buttonId,
                      'color',
                    )
                  },
                },

                update: {
                  currentColor: (buttonRow, buttonNum, buttonId, color) => {
                    pagesFuncs.pages.currentPage.keyboard.button.field.update.onChangeButtonField(
                      buttonRow,
                      buttonNum,
                      buttonId,
                      'color',
                      color,
                    )
                  },
                },
              },

              position: {
                get: {
                  allButtons: () => {
                    if (!pagesFuncs.pages.currentPage.get.currentPage())
                      return []
                    let allRowsArr = []
                    pagesFuncs.pages.currentPage.keyboard.rows.get
                      .currentPageRows()
                      .forEach((row) => {
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
                    const currentButton =
                      pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
                        currentButtonRow,
                        currentButtonNum,
                        currentButtonId,
                      )
                    const moveToButton =
                      pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
                        moveToButtonRow,
                        moveToButtonNum,
                        moveToButtonId,
                      )
                    const oldRows =
                      pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()
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
                        return {
                          ...row,
                          buttons: [...row.buttons, newCurrentButton],
                        }
                      } else if (row.rowNum === currentButtonRow) {
                        return {
                          ...row,
                          buttons: [...row.buttons, newMoveToButton],
                        }
                      } else return row
                    })
                    pagesFuncs.pages.currentPage.update.field('rows', newRows)
                  },

                  replaceToNew: (
                    currentButtonRow,
                    currentButtonNum,
                    currentButtonId,
                    moveToButtonRow,
                  ) => {
                    const currentButton =
                      pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
                        currentButtonRow,
                        currentButtonNum,
                        currentButtonId,
                      )
                    const oldRows =
                      pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()
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
                    pagesFuncs.pages.currentPage.update.field('rows', newRows)
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  React.useEffect(() => {
    pagesFuncs.pages.currentPage.get.currentPage() &&
      pagesFuncs.pages.currentPage.keyboard.rows.get
        .currentPageRows()
        .forEach((row, i) => {
          const nextRow =
            pagesFuncs.pages.currentPage.keyboard.rows.get.currentPageRows()[
              i + 1
            ]
          if (
            nextRow &&
            row.buttons.length === 0 &&
            nextRow.buttons.length === 0
          ) {
            const oldRowsWithoutCurrentRow =
              pagesFuncs.pages.currentPage.keyboard.rows.get.getOldRowsWithoutCurrentRow(
                row.rowNum,
              )
            const sortedOldRowsWithoutCurrentRow = oldRowsWithoutCurrentRow.map(
              (row, rowNum) => ({
                ...row,
                rowNum: rowNum,
              }),
            )
            pagesFuncs.pages.currentPage.update.field(
              'rows',
              sortedOldRowsWithoutCurrentRow,
            )
          }
        })

    pagesFuncs.pages.currentPage.get.currentPage() &&
      pagesFuncs.pages.currentPage.keyboard.buttons.get.countButtonsAmount() ===
        0 &&
      pagesFuncs.pages.currentPage.keyboard.type.update.changeType('empty')
  }, [
    pagesFuncs.pages.get.pages,
    pagesFuncs.pages.currentPage.get.currentPage(),
  ])

  return (
    <>
      <Navbar
        leftSidebarFuncs={leftSidebarFuncs}
        pagesFuncs={pagesFuncs}
        previewModeFuncs={previewModeFuncs}
      />
      <div className='main'>
        {isLeftSidebarOpened && (
          <LeftSidebar
            projectNameFuncs={projectNameFuncs}
            maxButtonsAmountFuncs={maxButtonsAmountFuncs}
            maxButtonsInRowFuncs={maxButtonsInRowFuncs}
            maxRowsFuncs={maxRowsFuncs}
            photoExtensionsFuncs={photoExtensionsFuncs}
            fileExtensionsFuncs={fileExtensionsFuncs}
            debugStateFuncs={debugStateFuncs}
          />
        )}
        <PreviewConstructor
          projectNameFuncs={projectNameFuncs}
          pagesFuncs={pagesFuncs}
        />
        {pagesFuncs.pages.get.pages.length > 0 && (
          <PageSelector pagesFuncs={pagesFuncs} />
        )}
        {pagesFuncs.pages.get.pages.length > 0 &&
          !previewModeFuncs.previewMode && (
            <RightSidebar pagesFuncs={pagesFuncs} />
          )}
      </div>
    </>
  )
}

export default App
