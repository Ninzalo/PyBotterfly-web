import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import AllowedItem from '../allowedItem/AllowedItem'
import './AllowedExtensions.css'

export default function AllowedFileExtensionsContainer(props) {
  const handleEnterPress = (key) => {
    if (key.code === 'Enter') {
      props.fileExtensionsFuncs.addFileExtension(
        props.fileExtensionsFuncs.newFileExtensionValue,
      )
    }
  }

  const extensions = props.fileExtensionsFuncs.fileExtensions.map((item) => (
    <AllowedItem
      key={item.id}
      id={item.id}
      isChecked={item.isChecked}
      onClick={() => props.fileExtensionsFuncs.toggleFileExtension(item.id)}
      onRemove={() => props.fileExtensionsFuncs.removeFileExtension(item.id)}
    />
  ))

  const allowedFileExtensionsEl = (
    <div className='allowed-file-extensions-container'>
      {extensions}
      <div className='add-extension'>
        <input
          type='text'
          placeholder='Add new'
          maxLength={5}
          onChange={props.fileExtensionsFuncs.onChangeNewFileExtension}
          onKeyDown={handleEnterPress}
          value={props.fileExtensionsFuncs.newFileExtensionValue}
        />
        <span
          className='material-symbols-outlined clickable'
          onClick={() =>
            props.fileExtensionsFuncs.addFileExtension(
              props.fileExtensionsFuncs.newFileExtensionValue,
            )
          }
        >
          done
        </span>
      </div>
    </div>
  )

  return (
    <DropDownMenu
      menuTitle='Allowed File extensions'
      content={allowedFileExtensionsEl}
    />
  )
}
