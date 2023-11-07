import React from 'react'
import './Switch.css'
import { nanoid } from 'nanoid'

export default function Switch(props) {
  const switchId = nanoid()
  return (
    <div className='switchbox'>
      <input
        key={switchId}
        type='checkbox'
        id={`switch-${switchId}`}
        onChange={props.toggleSwitch}
        checked={props.switchState}
      />
      <label
        htmlFor={`switch-${switchId}`}
        className='switch clickable'
      ></label>
    </div>
  )
}
