import React from 'react'
import '../Sidebar.css'

export default function DropDownItem(props) {
  return (
    <div className='dropdown clickable' onClick={props.toggleItem}>
      {props.dropDownArrow(props.isItemCurrentOpened)}
      <h3>{props.dropDownItemName}</h3>
    </div>
  )
}
