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

  const [pages, setPages] = React.useState(defaultValues.pages)
  const [currentPageId, setCurrentPageId] = React.useState('')

  const pagesFuncs = {
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
      findCurrentRow: (rowNum) => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const currentRow = oldRows.find((row) => row.rowNum === rowNum)
        return currentRow
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
      addRow: () => {
        const oldRows = pagesFuncs.keyboard.currentPageRows()
        const newRow = pagesFuncs.keyboard.getNewEmptyRow()
        const newRows = [...oldRows, newRow]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      addButtonInRow: (rowNum) => {
        const oldRowsWithoutCurrentRow =
          pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(rowNum)
        const newCurrentRow = pagesFuncs.keyboard.getNewButton(rowNum)
        const newRows = [...oldRowsWithoutCurrentRow, newCurrentRow]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
      addButtonAndRow: (rowNum) => {
        const oldRowsWithoutCurrentRow =
          pagesFuncs.keyboard.getOldRowsWithoutCurrentRow(rowNum)
        const newCurrentRow = pagesFuncs.keyboard.getNewButton(rowNum)
        const newEmptyRow = pagesFuncs.keyboard.getNewEmptyRow()
        const newRows = [
          ...oldRowsWithoutCurrentRow,
          newCurrentRow,
          newEmptyRow,
        ]
        pagesFuncs.changeCurrentPageField('rows', newRows)
      },
    },
  }

  const generalFuncs = {
    dropDownArrow: (item) => {
      return item ? (
        <span className='material-symbols-outlined'>expand_less</span>
      ) : (
        <span className='material-symbols-outlined'>expand_more</span>
      )
    },
  }

  return (
    <>
      <Navbar />
      <div className='main'>
        <LeftSidebar
          dropDownArrow={generalFuncs.dropDownArrow}
          projectNameFuncs={projectNameFuncs}
          maxButtonsAmountFuncs={maxButtonsAmountFuncs}
          maxButtonsInRowFuncs={maxButtonsInRowFuncs}
          maxRowsFuncs={maxRowsFuncs}
          photoExtensionsFuncs={photoExtensionsFuncs}
          fileExtensionsFuncs={fileExtensionsFuncs}
          debugStateFuncs={debugStateFuncs}
        />
        <PreviewConstructor
          projectNameFuncs={projectNameFuncs}
          pagesFuncs={pagesFuncs}
        />
        {pagesFuncs.pages.length > 0 && (
          <>
            <PageSelector
              dropDownArrow={generalFuncs.dropDownArrow}
              pagesFuncs={pagesFuncs}
            />
            <RightSidebar
              dropDownArrow={generalFuncs.dropDownArrow}
              pagesFuncs={pagesFuncs}
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
