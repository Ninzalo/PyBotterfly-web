import React from 'react'
import Navbar from './components/navbar/Navbar'
import PreviewConstructor from './components/pages/PreviewConstructor'
import LeftSidebar from './components/leftsidebar/LeftSidebar.jsx'
import RightSidebar from './components/rightsidebar/RightSidebar'
import { defaultValues } from './DefaultValues'
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

  const [maxButtonsAmount, setMaxButtonsAmount] = React.useState(
    defaultValues.maxButtonsAmount,
  )
  const maxButtonsAmountFuncs = {
    maxButtonsAmount: maxButtonsAmount,
    incrementMaxButtonsAmount: () => {
      setMaxButtonsAmount((prevState) => {
        return prevState < defaultValues.maxButtonsAmount
          ? prevState + 1
          : prevState
      })
    },
    decrementMaxButtonsAmount: () => {
      setMaxButtonsAmount((prevState) => {
        return prevState > 1 ? prevState - 1 : prevState
      })
    },
  }

  const [maxButtonsInRow, setMaxButtonsInRow] = React.useState(
    defaultValues.maxButtonsInRow,
  )
  const maxButtonsInRowFuncs = {
    maxButtonsInRow: maxButtonsInRow,
    incrementMaxButtonsInRow: () => {
      setMaxButtonsInRow((prevState) => {
        return prevState < defaultValues.maxButtonsInRow
          ? prevState + 1
          : prevState
      })
    },
    decrementMaxButtonsInRow: () => {
      setMaxButtonsInRow((prevState) => {
        return prevState > 1 ? prevState - 1 : prevState
      })
    },
  }

  const [maxRows, setMaxRows] = React.useState(defaultValues.maxRows)
  const maxRowsFuncs = {
    maxRows: maxRows,
    incrementMaxRows: () => {
      setMaxRows((prevState) => {
        return prevState < defaultValues.maxRows ? prevState + 1 : prevState
      })
    },
    decrementMaxRows: () => {
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
  const currentPage =
    pages.find((page) => page.id === currentPageId) || pages[0]

  const pagesFuncs = {
    pages: pages,
    currentPageId: currentPageId,
    currentPage: currentPage,
    addEmptyPage: () => {
      const newPage = {
        ...defaultValues.emptyPageData,
        id: nanoid(),
      }
      setCurrentPageId(newPage.id)
      setPages((prevState) => [...prevState, newPage])
    },
    removePage: (pageId) => {
      setPages((prevState) => [
        ...prevState.filter((page) => page.id !== pageId),
      ])
      setCurrentPageId('')
    },
    getPagesIds: () => [pages.map((page) => page.pageId)],
    isPageIdUnique: (pageId) =>
      pages.find((page) => page.pageId === pageId) ? false : true,
    onChangeCurrentPageText: (event) => {
      const { name, value } = event.target
      setPages((prevState) => {
        const prevPageState = prevState.find(
          (page) => page.id === currentPageId,
        )
        return [
          ...prevState.filter((page) => page.id !== currentPageId),
          {
            ...prevPageState,
            [name]: value,
          },
        ]
      })
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
          <RightSidebar
            dropDownArrow={generalFuncs.dropDownArrow}
            pagesFuncs={pagesFuncs}
          />
        )}
      </div>
    </>
  )
}

export default App
