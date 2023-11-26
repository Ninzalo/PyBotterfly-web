import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import { emptyPageData } from '../../DefaultValues'
import './MessageTextContainer.css'

export default function MessageTextContainer(props) {
  const emptyMessageStr = 'Text on the page was not changed'

  const currentPageText =
    props.pagesFuncs.pages.currentPage.get.currentPageText()

  props.pagesFuncs.pages.currentPage.errors.update.checkConditionAndUpdateError(
    currentPageText === emptyPageData.text,
    emptyMessageStr,
  )

  function handleKeyDown(e) {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  const messageTextEl = (
    <div className='message-text-container'>
      <textarea
        onKeyDown={handleKeyDown}
        name='text'
        onChange={
          props.pagesFuncs.pages.currentPage.update.onChangeCurrentPageText
        }
        value={currentPageText}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Text on the page' content={messageTextEl} />
}
