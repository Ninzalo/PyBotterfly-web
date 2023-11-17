import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import Switch from '../switch/Switch'

export default function DebugStateContainer(props) {
  const debugStateEl = (
    <div className='debug-state-container'>
      <Switch
        toggleSwitch={props.debugStateFuncs.toggleDebugState}
        switchState={props.debugStateFuncs.debugState}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Debug State' content={debugStateEl} />
}
