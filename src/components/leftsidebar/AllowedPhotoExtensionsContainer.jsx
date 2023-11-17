import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import AllowedItem from '../AllowedItem'

export default function AllowedPhotoExtensionsContainer(props) {
  const handleEnterPress = (key) => {
    if (key.code === 'Enter') {
      props.photoExtensionsFuncs.addPhotoExtension(
        props.photoExtensionsFuncs.newPhotoExtensionValue,
      )
    }
  }

  const extensions = props.photoExtensionsFuncs.photoExtensions.map((item) => (
    <AllowedItem
      key={item.id}
      id={item.id}
      isChecked={item.isChecked}
      onClick={() => props.photoExtensionsFuncs.togglePhotoExtension(item.id)}
      onRemove={() => props.photoExtensionsFuncs.removePhotoExtension(item.id)}
    />
  ))

  const allowedPhotoExtensionsEl = (
    <div className='allowed-photo-extensions-container'>
      {extensions}
      <div className='add-extension'>
        <input
          type='text'
          placeholder='Add new'
          maxLength={5}
          onChange={props.photoExtensionsFuncs.onChangeNewPhotoExtension}
          onKeyDown={handleEnterPress}
          value={props.photoExtensionsFuncs.newPhotoExtensionValue}
        />
        <span
          className='material-symbols-outlined clickable'
          onClick={() =>
            props.photoExtensionsFuncs.addPhotoExtension(
              props.photoExtensionsFuncs.newPhotoExtensionValue,
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
      menuTitle='Allowed Photo extensions'
      content={allowedPhotoExtensionsEl}
    />
  )
}
