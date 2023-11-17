import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import Counter from '../counter/Counter'
import { defaultValues } from '../../DefaultValues'

export default function MaxRowsContainer(props) {
  const maxRowsEl = (
    <div className='max-rows-container'>
      <Counter
        currentState={props.maxRowsFuncs.maxRows}
        maxValue={defaultValues.maxRows}
        allowEditState={props.maxRowsFuncs.allowEdit}
        onDecrement={props.maxRowsFuncs.decrementMaxRows}
        onIncrement={props.maxRowsFuncs.incrementMaxRows}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Max Rows on page' content={maxRowsEl} />
}
