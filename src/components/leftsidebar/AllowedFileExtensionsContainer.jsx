import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import AllowedItem from '../AllowedItem'

export default function AllowedFileExtensionsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

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

  return (
    <div className='allowed-file-extensions-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
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
      )}
    </div>
  )
}
