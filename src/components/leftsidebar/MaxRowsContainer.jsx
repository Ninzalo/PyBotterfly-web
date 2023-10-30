import React from 'react'
import '../Sidebar.css'
import DropDownItem from './DropDownItem'
import { defaultValues } from '../../DefaultValues'

export default function MaxRowsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)
  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }
  return (
    <div className='max-rows-container'>
      <DropDownItem
        {...props}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Rows on page'
      />

      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle${props.maxRows === 1 ? ' unavailable' : ''}`}
            onClick={props.decrementMaxRows}
          >
            -
          </div>
          <h3>{props.maxRows}</h3>
          <div
            className={`circle${
              props.maxRows === defaultValues.maxRows ? ' unavailable' : ''
            }`}
            onClick={props.incrementMaxRows}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}
