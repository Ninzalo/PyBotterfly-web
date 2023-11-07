import React from 'react'
import DropDownItem from './DropDownItem'
import Switch from '../switch/Switch'

export default function PreviewModeContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Preview Mode'
      />
      {itemOpened && (
        <Switch
          toggleSwitch={props.previewModeFuncs.togglePreviewMode}
          switchState={props.previewModeFuncs.previewMode}
        />
      )}
    </div>
  )
}
