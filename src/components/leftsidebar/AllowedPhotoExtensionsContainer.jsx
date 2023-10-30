import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import AllowedItem from './AllowedItem'

export default function AllowedPhotoExtensionsContainer(props) {
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
      <DropDownItem
        {...props}
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
