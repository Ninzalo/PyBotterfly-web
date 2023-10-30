import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import AllowedItem from './AllowedItem'

export default function AllowedFileExtensionsContainer(props) {
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
      <DropDownItem
        {...props}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Allowed File extensions'
      />

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
