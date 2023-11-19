import React from 'react'
import './AllowedItem.css'

export default function AllowedItem(props) {
  return (
    <div className='allowed-item clickable' onClick={props.onClick}>
      <span className='material-symbols-outlined'>
        {props.isChecked ? 'radio_button_checked' : 'radio_button_unchecked'}
      </span>
      <h3>{props.id}</h3>
      <span
        className='material-symbols-outlined trash-ico'
        onClick={props.onRemove}
      >
        delete
      </span>
    </div>
  )
}
