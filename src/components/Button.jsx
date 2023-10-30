import React from 'react'
import './Button.css'

export default function Button(props) {
  let color
  color = !props.color ? 'primary' : 'primary'
  if (props.color === 'green') {
    color = 'positive'
  } else if (props.color === 'red') {
    color = 'negative'
  } else if (props.color === 'blue') {
    color = 'primary'
  } else if (props.color === 'white') {
    color = 'secondary'
  } else {
    color = 'primary'
  }

  const className = `btn ${color}`

  return (
    <div className={className}>
      <p>Button</p>
    </div>
  )
}
