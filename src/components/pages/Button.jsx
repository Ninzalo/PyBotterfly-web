import React from 'react'
import './Button.css'

export default function Button(props) {
  const className = `btn clickable ${props.color}`

  return (
    <div className={className} onClick={props.onClick}>
      <p>{props.label}</p>
    </div>
  )
}
