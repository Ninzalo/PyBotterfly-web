import React from 'react'
import './ActionWithAccept.css'

export default function ActionWithAccept(props) {
  const [isOpened, setIsOpened] = React.useState(false)

  function toggleIsOpened() {
    setIsOpened((prevState) => !prevState)
  }

  return (
    <div className='action-with-accept'>
      <div
        className={`action-with-accept__expand clickable ${
          isOpened ? 'action-with-accept__expanded' : ''
        }`}
        onClick={toggleIsOpened}
      >
        <h3>{props.actionTitle}</h3>
      </div>
      {isOpened && (
        <div className='action-with-accept__content'>
          <div className='action-with-accept__text'>
            {props.customAcceptText ? props.customAcceptText : `I'm sure!`}
          </div>
          <div className='action-with-accept__buttons'>
            <div
              className='action-with-accept__button yes clickable'
              onClick={() => props.acceptAction()}
            >
              Yes
            </div>
            <div
              className='action-with-accept__button clickable'
              onClick={toggleIsOpened}
            >
              No
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
