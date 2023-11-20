import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'

export default function PageIdContainer(props) {
  const unfilledPageIdErrorText = 'Page ID must be filled'
  const nonUniquePageIdErrorText = 'Page ID must be unique'

  props.pagesFuncs.errors.update.checkConditionAndUpdateError(
    props.pagesFuncs.currentPage.pageId === '',
    unfilledPageIdErrorText,
  )

  props.pagesFuncs.errors.update.checkConditionAndUpdateError(
    props.pagesFuncs.currentPage.pageId !== '' &&
      !props.pagesFuncs.isPageIdUnique(props.pagesFuncs.currentPage?.pageId),
    nonUniquePageIdErrorText,
  )

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
