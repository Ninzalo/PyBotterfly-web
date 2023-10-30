import React from 'react'
import './Sidebar.css'

export default function LeftSidebar(props) {
  function isItemOpenedArrow(item) {
    return item ? (
      <span className='material-symbols-outlined'>expand_less</span>
    ) : (
      <span className='material-symbols-outlined'>expand_more</span>
    )
  }

  return (
    <div className='sidebar left-sidebar'>
      <h1>General Settings</h1>
      <ProjectNameContainer {...props} isItemOpened={isItemOpenedArrow} />
      <MaxButtonsContainer {...props} isItemOpened={isItemOpenedArrow} />
      <MaxWidthContainer {...props} isItemOpened={isItemOpenedArrow} />
    </div>
  )
}

function MaxWidthContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }
  return (
    <div className='max-rows'>
      <div className='dropdown' onClick={toggleOpened}>
        {props.isItemOpened(itemOpened)}
        <h3>Max Rows on page</h3>
      </div>
      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle${props.maxRows === 1 ? ' unavailable' : ''}`}
            onClick={props.decrementMaxRows}
          >
            -
          </div>
          <h3>{props.maxRows}</h3>
          <div
            className={`circle${props.maxRows === 5 ? ' unavailable' : ''}`}
            onClick={props.incrementMaxRows}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}

function MaxButtonsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='max-buttons'>
      <div className='dropdown' onClick={toggleOpened}>
        {props.isItemOpened(itemOpened)}
        <h3>Max Buttons in a row</h3>
      </div>
      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle${props.maxButtons === 1 ? ' unavailable' : ''}`}
            onClick={props.decrementMaxButtons}
          >
            -
          </div>
          <h3>{props.maxButtons}</h3>
          <div
            className={`circle${props.maxButtons === 4 ? ' unavailable' : ''}`}
            onClick={props.incrementMaxButtons}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectNameContainer(props) {
  const [isProjectNameOpened, setIsProjectNameOpened] = React.useState(false)

  function toggleProjectName() {
    setIsProjectNameOpened((prevState) => !prevState)
  }
  return (
    <div className='project-name'>
      <div className='dropdown' onClick={toggleProjectName}>
        {props.isItemOpened(isProjectNameOpened)}
        <h3>Your project name</h3>
      </div>
      {isProjectNameOpened && (
        <input
          type='text'
          placeholder='Project Name'
          maxLength={21}
          onChange={props.onChangeProjectName}
          value={props.projectName}
        />
      )}
    </div>
  )
}
