import React from 'react'
import DropDownItem from './DropDownItem'
import Switch from '../switch/Switch'

export default function DebugStateContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='debug-state-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Debug State'
      />
      {itemOpened && (
        <Switch
          toggleSwitch={props.debugStateFuncs.toggleDebugState}
          switchState={props.debugStateFuncs.debugState}
        />
      )}
    </div>
  )
}
