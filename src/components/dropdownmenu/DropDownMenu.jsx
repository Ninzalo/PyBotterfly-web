import React from 'react'
import './DropDownMenu.css'

export default function DropDownMenu(props) {
  const [isOpened, setIsOpened] = React.useState(props.defaultIsOpened || false)

  function toggleIsOpened() {
    setIsOpened((prev) => !prev)
  }

  return (
    <div
      className={`dropdown-menu ${
        props.customClassName ? props.customClassName : ''
      }`}
      id={props.customId}
    >
      <div className='dropdown-menu-preview'>
        <div
          className='dropdown-menu-preview-expand clickable'
          onClick={toggleIsOpened}
        >
          <span className='material-symbols-outlined'>
            {isOpened ? 'expand_less' : 'expand_more'}
          </span>
          <h3 className='dropdown-menu-title'>{props.menuTitle}</h3>
        </div>
        {props.nameElement && (
          <div className='dropdown-menu-title-element'>{props.nameElement}</div>
        )}
      </div>
      {isOpened && <div className='dropdown-menu-content'>{props.content}</div>}
    </div>
  )
}
