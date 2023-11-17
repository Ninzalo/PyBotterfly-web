import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import Counter from '../counter/Counter'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsAmountContainer(props) {
  const maxButtonsAmountEl = (
    <div className='max-buttons-amount'>
      <Counter
        currentState={props.maxButtonsAmountFuncs.maxButtonsAmount}
        maxValue={defaultValues.maxButtonsAmount}
        allowEditState={props.maxButtonsAmountFuncs.allowEdit}
        onDecrement={props.maxButtonsAmountFuncs.decrementMaxButtonsAmount}
        onIncrement={props.maxButtonsAmountFuncs.incrementMaxButtonsAmount}
      />
    </div>
  )

  return (
    <DropDownMenu menuTitle='Max buttons amount' content={maxButtonsAmountEl} />
  )
}
