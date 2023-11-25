import React from 'react'
import DropDownMenu from '../../dropdownmenu/DropDownMenu'

export default function ButtonPositionSetting(props) {
  const positionEl = <div className='button-position-setting'></div>

  return <DropDownMenu menuTitle='Position' content={positionEl} />
}
