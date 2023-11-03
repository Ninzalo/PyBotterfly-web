import React from 'react'
import DropDownItem from './DropDownItem'
import AllowedItem from '../AllowedItem'

export default function AllowedPhotoExtensionsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

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

  return (
    <div className='allowed-photo-extensions-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Allowed Photo extensions'
      />

      {itemOpened && extensions}
      {itemOpened && (
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
      )}
    </div>
  )
}
