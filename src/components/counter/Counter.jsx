import React from 'react'
import './Counter.css'

export default function Counter(props) {
  return (
    <div className='counter'>
      <div
        className={`circle clickable ${
          (props.currentState === 1 || !props.allowEditState) && 'unavailable'
        }`}
        onClick={props.onDecrement}
      >
        -
      </div>
      <h3>{props.currentState}</h3>
      <div
        className={`circle clickable ${
          (props.currentState === props.maxValue || !props.allowEditState) &&
          'unavailable'
        }`}
        onClick={props.onIncrement}
      >
        +
      </div>
    </div>
  )
}
