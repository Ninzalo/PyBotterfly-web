import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import Counter from '../counter/Counter'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsInRowContainer(props) {
  const maxButtonsInRowEl = (
    <div className='max-buttons-in-row'>
      <Counter
        currentState={props.maxButtonsInRowFuncs.maxButtonsInRow}
        maxValue={defaultValues.maxButtonsInRow}
        allowEditState={props.maxButtonsInRowFuncs.allowEdit}
        onDecrement={props.maxButtonsInRowFuncs.decrementMaxButtonsInRow}
        onIncrement={props.maxButtonsInRowFuncs.incrementMaxButtonsInRow}
      />
    </div>
  )
  return (
    <DropDownMenu
      menuTitle='Max Buttons in a row'
      content={maxButtonsInRowEl}
    />
  )
}
