import React from 'react'
import './Sidebar.css'
import { defaultValues } from '../DefaultValues'

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
      <MaxRowsContainer {...props} isItemOpened={isItemOpenedArrow} />
      <AllowedPhotoExtensions {...props} isItemOpened={isItemOpenedArrow} />
      <AllowedFileExtensions {...props} isItemOpened={isItemOpenedArrow} />
    </div>
  )
}

function AllowedFileExtensions(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  const handleEnterPress = (key) => {
    if (key.code === 'Enter') {
      props.addFileExtension(props.newFileExtensionValue)
    }
  }

  const extensions = props.allowedFileExtensions.map((item) => (
    <AllowedItem
      key={item.id}
      id={item.id}
      isChecked={item.isChecked}
      onClick={() => props.toggleFileExtension(item.id)}
      onRemove={() => props.removeFileExtension(item.id)}
    />
  ))
  return (
    <div className='allowed-file-extensions-container'>
      <div className='dropdown' onClick={toggleOpened}>
        {props.isItemOpened(itemOpened)}
        <h3>Allowed File extensions</h3>
      </div>

      {itemOpened && extensions}
      {itemOpened && (
        <div className='add-extension'>
          <input
            type='text'
            placeholder='Add new'
            maxLength={10}
            onChange={props.onChangeNewFileExtension}
            onKeyDown={handleEnterPress}
            value={props.newFileExtensionValue}
          />
          <span
            className='material-symbols-outlined clickable'
            onClick={() => props.addFileExtension(props.newFileExtensionValue)}
          >
            done
          </span>
        </div>
      )}
    </div>
  )
}

function AllowedPhotoExtensions(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  const handleEnterPress = (key) => {
    if (key.code === 'Enter') {
      props.addPhotoExtension(props.newPhotoExtensionValue)
    }
  }

  const extensions = props.allowedPhotoExtensions.map((item) => (
    <AllowedItem
      key={item.id}
      id={item.id}
      isChecked={item.isChecked}
      onClick={() => props.togglePhotoExtension(item.id)}
      onRemove={() => props.removePhotoExtension(item.id)}
    />
  ))

  return (
    <div className='allowed-photo-extensions-container'>
      <div className='dropdown' onClick={toggleOpened}>
        {props.isItemOpened(itemOpened)}
        <h3>Allowed Photo extensions</h3>
      </div>

      {itemOpened && extensions}
      {itemOpened && (
        <div className='add-extension'>
          <input
            type='text'
            placeholder='Add new'
            maxLength={10}
            onChange={props.onChangeNewPhotoExtension}
            onKeyDown={handleEnterPress}
            value={props.newPhotoExtensionValue}
          />
          <span
            className='material-symbols-outlined clickable'
            onClick={() =>
              props.addPhotoExtension(props.newPhotoExtensionValue)
            }
          >
            done
          </span>
        </div>
      )}
    </div>
  )
}

function AllowedItem(props) {
  return (
    <div className='allowed-item' onClick={props.onClick}>
      <span className='material-symbols-outlined'>
        {props.isChecked ? 'radio_button_checked' : 'radio_button_unchecked'}
      </span>
      <h3>{props.id}</h3>
      <span
        className='material-symbols-outlined trash-ico'
        onClick={props.onRemove}
      >
        delete
      </span>
    </div>
  )
}

function MaxRowsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }
  return (
    <div className='max-rows-container'>
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
            className={`circle${
              props.maxRows === defaultValues.maxRows ? ' unavailable' : ''
            }`}
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
            className={`circle${
              props.maxButtons === defaultValues.maxButtonsInRow
                ? ' unavailable'
                : ''
            }`}
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
    <div className='project-name-container'>
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
