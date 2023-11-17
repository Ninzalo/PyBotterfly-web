import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import { defaultValues } from '../../DefaultValues'

export default function MaxRowsContainer(props) {
  const maxRowsEl = (
    <div className='max-rows-container'>
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
    </div>
  )

  return <DropDownMenu menuTitle='Max Rows on page' content={maxRowsEl} />
}
