import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'

export default function ProjectNameContainer(props) {
  const inputProjectNameEl = (
    <div className='project-name-container'>
      <input
        type='text'
        placeholder='Project Name'
        maxLength={21}
        onChange={props.projectNameFuncs.onChangeProjectName}
        value={props.projectNameFuncs.projectName}
      />
    </div>
  )

  return (
    <DropDownMenu menuTitle='Your Project name' content={inputProjectNameEl} />
  )
}
