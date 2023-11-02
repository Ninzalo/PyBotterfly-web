import React from 'react'
import DropDownItem from '../leftsidebar/DropDownItem'

export default function MessageTextContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  function handleKeyDown(e) {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div className='message-text-container'>
      {props.pagesFuncs.pages.length > 0 && (
        <DropDownItem
          dropDownArrow={props.dropDownArrow}
          toggleItem={toggleOpened}
          isItemCurrentOpened={itemOpened}
          dropDownItemName='Text on the page'
        />
      )}
      {props.pagesFuncs.pages.length > 0 && itemOpened && (
        <textarea
          onKeyDown={handleKeyDown}
          name='text'
          onChange={props.pagesFuncs.onChangeCurrentPageText}
          value={props.pagesFuncs.currentPage?.text}
        />
      )}
    </div>
  )
}
