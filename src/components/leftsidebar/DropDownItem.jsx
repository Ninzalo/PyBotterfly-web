import React from 'react'
import '../Sidebar.css'

export default function DropDownItem(props) {
  return (
    <div className='dropdown' onClick={props.toggleItem}>
      {props.isItemOpened(props.isCurrentItemOpened)}
      <h3>{props.dropDownItemName}</h3>
    </div>
  )
}
