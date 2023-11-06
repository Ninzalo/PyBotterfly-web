import React from 'react'
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
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Max Rows on page'
      />

      {itemOpened && (
        <div className='counter'>
          <div
            className={`circle clickable ${
              (props.maxRowsFuncs.maxRows === 1 ||
                !props.maxRowsFuncs.allowEdit) &&
              'unavailable'
            }`}
            onClick={props.maxRowsFuncs.decrementMaxRows}
          >
            -
          </div>
          <h3>{props.maxRowsFuncs.maxRows}</h3>
          <div
            className={`circle clickable ${
              (props.maxRowsFuncs.maxRows === defaultValues.maxRows ||
                !props.maxRowsFuncs.allowEdit) &&
              'unavailable'
            }`}
            onClick={props.maxRowsFuncs.incrementMaxRows}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}
