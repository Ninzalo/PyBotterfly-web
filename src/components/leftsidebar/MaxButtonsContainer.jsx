import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import { defaultValues } from '../../DefaultValues'

export default function MaxButtonsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='max-buttons'>
      <DropDownItem
        {...props}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Buttons in a row'
      />
      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle clickable ${
              props.maxButtons === 1 ? ' unavailable' : ''
            }`}
            onClick={props.decrementMaxButtons}
          >
            -
          </div>
          <h3>{props.maxButtons}</h3>
          <div
            className={`circle clickable ${
              props.maxButtons === defaultValues.maxButtonsInRow
                ? ' unavailable'
                : ''
            }`}
            onClick={props.incrementMaxButtons}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}
