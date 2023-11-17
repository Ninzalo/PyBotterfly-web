import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsAmountContainer(props) {
  const maxButtonsAmountEl = (
    <div className='max-buttons-amount'>
      <div className='counter'>
        <div
          className={`circle clickable ${
            (props.maxButtonsAmountFuncs.maxButtonsAmount === 1 ||
              !props.maxButtonsAmountFuncs.allowEdit) &&
            'unavailable'
          }`}
          onClick={props.maxButtonsAmountFuncs.decrementMaxButtonsAmount}
        >
          -
        </div>
        <h3>{props.maxButtonsAmountFuncs.maxButtonsAmount}</h3>
        <div
          className={`circle clickable ${
            (props.maxButtonsAmountFuncs.maxButtonsAmount ===
              defaultValues.maxButtonsAmount ||
              !props.maxButtonsAmountFuncs.allowEdit) &&
            'unavailable'
          }`}
          onClick={props.maxButtonsAmountFuncs.incrementMaxButtonsAmount}
        >
          +
        </div>
      </div>
    </div>
  )

  return (
    <DropDownMenu menuTitle='Max buttons amount' content={maxButtonsAmountEl} />
  )
}
