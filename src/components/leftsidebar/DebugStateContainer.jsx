import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'

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
        <div
          className='debug-state-container'
          onClick={props.debugStateFuncs.toggleDebugState}
        >
          <div className='switch clickable'>
            {props.debugStateFuncs.debugState ? (
              <div className='slider switch-on'></div>
            ) : (
              <div className='slider switch-off'></div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
