import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'

export default function PageIdContainer(props) {
  const pageIdEl = (
    <div className='page-id-container'>
      <input
        type='text'
        placeholder='Page ID'
        maxLength={25}
        name='pageId'
        onChange={props.pagesFuncs.onChangeCurrentPageId}
        value={props.pagesFuncs.currentPage?.pageId}
      />
    </div>
  )

  return (
    <div className='page-id-container'>
      {props.pagesFuncs.currentPage.pageId === '' && (
        <p className='warning-text'>Page ID must be filled</p>
      )}
      {props.pagesFuncs.currentPage.pageId !== '' &&
        !props.pagesFuncs.isPageIdUnique(
          props.pagesFuncs.currentPage?.pageId,
        ) && <p className='warning-text'>Page ID must be unique</p>}
      <DropDownMenu menuTitle='Page ID' content={pageIdEl} />
    </div>
  )
}
