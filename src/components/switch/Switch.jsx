import React from 'react'
import './Switch.css'

export default function Switch(props) {
  return (
    <div className='switchbox'>
      <input
        type='checkbox'
        id='switch'
        onChange={props.toggleSwitch}
        checked={props.switchState}
      />
      <label htmlFor='switch' className='switch clickable'></label>
    </div>
  )
}
