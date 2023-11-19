import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import './MessageTextContainer.css'

export default function MessageTextContainer(props) {
  function handleKeyDown(e) {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  const messageTextEl = (
    <div className='message-text-container'>
      <textarea
        onKeyDown={handleKeyDown}
        name='text'
        onChange={props.pagesFuncs.onChangeCurrentPageText}
        value={props.pagesFuncs.currentPage?.text}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Text on the page' content={messageTextEl} />
}
