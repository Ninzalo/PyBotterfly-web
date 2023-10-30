import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import LeftSidebar from './components/leftsidebar/LeftSidebar.jsx'
import RightSidebar from './components/RightSidebar'
import { defaultValues } from './DefaultValues'

function App() {
  const [projectName, setProjectName] = React.useState(
    defaultValues.projectName,
  )

  const [maxButtonsAmount, setMaxButtonsAmount] = React.useState(
    defaultValues.maxButtonsAmount,
  )

  const [maxButtonsInRow, setMaxButtonsInRow] = React.useState(
    defaultValues.maxButtonsInRow,
  )

  const [maxRows, setMaxRows] = React.useState(defaultValues.maxRows)

  console.log(maxButtonsAmount, maxButtonsInRow, maxRows)

  const [photoExtensions, setPhotoExtensions] = React.useState(
    defaultValues.allowedPhotoExtensions,
  )
  const [newPhotoExtensionValue, setNewPhotoExtensionValue] = React.useState('')

  const [fileExtensions, setFileExtensions] = React.useState(
    defaultValues.allowedFileExtensions,
  )

  const [newFileExtensionValue, setNewFileExtensionValue] = React.useState('')

  const fileExtensionsFuncs = {
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

  const photoExtensionsFuncs = {
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

  const projectNameFuncs = {
    onChangeProjectName: (event) => {
      setProjectName(event.target.value)
    },
  }

  const maxButtonsAmountFuncs = {
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

  const maxButtonsInRowFuncs = {
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

  const maxRowsFuncs = {
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

  const generalFuncs = {
    isItemOpenedArrow: (item) => {
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
          isItemOpened={generalFuncs.isItemOpenedArrow}
          dropdownItem={generalFuncs.dropdownItem}
          projectName={projectName}
          {...projectNameFuncs}
          maxButtonsAmount={maxButtonsAmount}
          {...maxButtonsAmountFuncs}
          maxButtonsInRow={maxButtonsInRow}
          {...maxButtonsInRowFuncs}
          maxRows={maxRows}
          {...maxRowsFuncs}
          allowedPhotoExtensions={photoExtensions}
          newPhotoExtensionValue={newPhotoExtensionValue}
          {...photoExtensionsFuncs}
          allowedFileExtensions={fileExtensions}
          newFileExtensionValue={newFileExtensionValue}
          {...fileExtensionsFuncs}
        />
        <Page projectName={projectName} />
        <RightSidebar />
      </div>
    </>
  )
}

export default App
