import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'

export default function ProjectNameContainer(props) {
  const [isProjectNameOpened, setIsProjectNameOpened] = React.useState(false)

  function toggleProjectName() {
    setIsProjectNameOpened((prevState) => !prevState)
  }
  return (
    <div className='project-name-container'>
      <DropDownItem
        {...props}
        toggleItem={toggleProjectName}
        isItemCurrentOpened={isProjectNameOpened}
        dropDownItemName='Your Project name'
      />
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
