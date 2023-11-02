import React from 'react'
import DropDownItem from './DropDownItem'

export default function ProjectNameContainer(props) {
  const [isProjectNameOpened, setIsProjectNameOpened] = React.useState(false)

  function toggleProjectName() {
    setIsProjectNameOpened((prevState) => !prevState)
  }

  return (
    <div className='project-name-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleProjectName}
        isItemCurrentOpened={isProjectNameOpened}
        dropDownItemName='Your Project name'
      />
      {isProjectNameOpened && (
        <input
          type='text'
          placeholder='Project Name'
          maxLength={21}
          onChange={props.projectNameFuncs.onChangeProjectName}
          value={props.projectNameFuncs.projectName}
        />
      )}
    </div>
  )
}
