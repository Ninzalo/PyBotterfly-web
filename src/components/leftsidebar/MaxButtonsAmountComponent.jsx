import React from 'react'
import '../Sidebar.css'
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
        {...props}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Buttons Amount'
      />
      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle clickable ${
              props.maxButtonsAmount === 1 ? ' unavailable' : ''
            }`}
            onClick={props.decrementMaxButtonsAmount}
          >
            -
          </div>
          <h3>{props.maxButtonsAmount}</h3>
          <div
            className={`circle clickable ${
              props.maxButtonsAmount === defaultValues.maxButtonsAmount
                ? ' unavailable'
                : ''
            }`}
            onClick={props.incrementMaxButtonsAmount}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}
