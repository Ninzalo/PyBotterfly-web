import React from 'react'
import DropDownMenu from '../../dropdownmenu/DropDownMenu'

export default function ButtonActionSetting(props) {
  const actionEl = (
    <div className='button-action-setting'>
      <></>
    </div>
  )

  return <DropDownMenu menuTitle='Action' content={actionEl} />
}
