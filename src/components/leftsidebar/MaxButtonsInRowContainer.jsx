import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsInRowContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='max-buttons-in-row'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Buttons in a row'
      />
      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle clickable ${
              props.maxButtonsInRowFuncs.maxButtonsInRow === 1
                ? ' unavailable'
                : ''
            }`}
            onClick={props.maxButtonsInRowFuncs.decrementMaxButtonsInRow}
          >
            -
          </div>
          <h3>{props.maxButtonsInRowFuncs.maxButtonsInRow}</h3>
          <div
            className={`circle clickable ${
              props.maxButtonsInRowFuncs.maxButtonsInRow ===
              defaultValues.maxButtonsInRow
                ? ' unavailable'
                : ''
            }`}
            onClick={props.maxButtonsInRowFuncs.incrementMaxButtonsInRow}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}
