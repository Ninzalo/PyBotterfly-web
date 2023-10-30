import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { defaultValues } from './DefaultValues'

function App() {
  const [projectName, setProjectName] = React.useState(
    defaultValues.projectName,
  )
  const [maxButtons, setMaxButtons] = React.useState(
    defaultValues.maxButtonsInRow,
  )
  const [maxRows, setMaxRows] = React.useState(defaultValues.maxRows)

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
      setFileExtensions((prevState) => {
        const newState = prevState.filter((item) => item.id !== itemId)
        return [...newState, { id: itemId, isChecked: true }]
      })
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
      setPhotoExtensions((prevState) => {
        const newState = prevState.filter((item) => item.id !== itemId)
        return [...newState, { id: itemId, isChecked: true }]
      })
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

  const maxButtonsFuncs = {
    incrementMaxButtons: () => {
      setMaxButtons((prevState) => {
        return prevState < defaultValues.maxButtonsInRow
          ? prevState + 1
          : prevState
      })
    },
    decrementMaxButtons: () => {
      setMaxButtons((prevState) => {
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

  return (
    <>
      <Navbar />
      <div className='main'>
        <LeftSidebar
          projectName={projectName}
          {...projectNameFuncs}
          maxButtons={maxButtons}
          {...maxButtonsFuncs}
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
