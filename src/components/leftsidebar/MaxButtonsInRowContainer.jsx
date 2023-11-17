import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsInRowContainer(props) {
  const maxButtonsInRowEl = (
    <div className='max-buttons-in-row'>
      <div className='counter'>
        <div
          className={`circle clickable ${
            (props.maxButtonsInRowFuncs.maxButtonsInRow === 1 ||
              !props.maxButtonsInRowFuncs.allowEdit) &&
            'unavailable'
          }`}
          onClick={props.maxButtonsInRowFuncs.decrementMaxButtonsInRow}
        >
          -
        </div>
        <h3>{props.maxButtonsInRowFuncs.maxButtonsInRow}</h3>
        <div
          className={`circle clickable ${
            (props.maxButtonsInRowFuncs.maxButtonsInRow ===
              defaultValues.maxButtonsInRow ||
              !props.maxButtonsInRowFuncs.allowEdit) &&
            'unavailable'
          }`}
          onClick={props.maxButtonsInRowFuncs.incrementMaxButtonsInRow}
        >
          +
        </div>
      </div>
    </div>
  )
  return (
    <DropDownMenu
      menuTitle='Max Buttons in a row'
      content={maxButtonsInRowEl}
    />
  )
}
