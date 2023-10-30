import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

function App() {
  const [projectName, setProjectName] = React.useState('Bot Name')
  const [maxButtons, setMaxButtons] = React.useState(4)
  const [maxRows, setMaxRows] = React.useState(5)

  function onChangeProjectName(event) {
    setProjectName(event.target.value)
  }

  function incrementMaxButtons() {
    setMaxButtons((prevState) => {
      return prevState < 4 ? prevState + 1 : prevState
    })
  }

  function decrementMaxButtons() {
    setMaxButtons((prevState) => {
      return prevState > 1 ? prevState - 1 : prevState
    })
  }

  function incrementMaxRows() {
    setMaxRows((prevState) => {
      return prevState < 5 ? prevState + 1 : prevState
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
