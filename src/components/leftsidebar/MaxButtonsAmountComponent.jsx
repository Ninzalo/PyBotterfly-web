import React from 'react'
import DropDownItem from './DropDownItem'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsAmountContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='max-buttons-amount'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Buttons Amount'
      />
      {itemOpened && (
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
      )}
    </div>
  )
}
