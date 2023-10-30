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

  function onChangeProjectName(event) {
    setProjectName(event.target.value)
  }

  function incrementMaxButtons() {
    setMaxButtons((prevState) => {
      return prevState < defaultValues.maxButtonsInRow
        ? prevState + 1
        : prevState
    })
  }

  function decrementMaxButtons() {
    setMaxButtons((prevState) => {
      return prevState > 1 ? prevState - 1 : prevState
    })
  }

  function incrementMaxRows() {
    setMaxRows((prevState) => {
      return prevState < defaultValues.maxRows ? prevState + 1 : prevState
    })
  }

  function decrementMaxRows() {
    setMaxRows((prevState) => {
      return prevState > 1 ? prevState - 1 : prevState
    })
  }

  return (
    <>
      <Navbar />
      <div className='main'>
        <LeftSidebar
          projectName={projectName}
          onChangeProjectName={onChangeProjectName}
          maxButtons={maxButtons}
          incrementMaxButtons={incrementMaxButtons}
          decrementMaxButtons={decrementMaxButtons}
          maxRows={maxRows}
          incrementMaxRows={incrementMaxRows}
          decrementMaxRows={decrementMaxRows}
        />
        <Page projectName={projectName} />
        <RightSidebar />
      </div>
    </>
  )
}

export default App
