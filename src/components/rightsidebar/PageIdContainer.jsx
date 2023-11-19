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

  return <DropDownMenu menuTitle='Page ID' content={pageIdEl} />
}
