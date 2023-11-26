import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'

export default function PageIdContainer(props) {
  const unfilledPageIdErrorText = 'Page ID must be filled'
  const nonUniquePageIdErrorText = 'Page ID must be unique'

  const currentPageId = props.pagesFuncs.pages.currentPage.get.currentPageId()

  props.pagesFuncs.pages.currentPage.errors.update.checkConditionAndUpdateError(
    currentPageId === '',
    unfilledPageIdErrorText,
  )

  props.pagesFuncs.pages.currentPage.errors.update.checkConditionAndUpdateError(
    currentPageId !== '' &&
      !props.pagesFuncs.pages.get.isPageIdUnique(currentPageId),
    nonUniquePageIdErrorText,
  )

  const pageIdEl = (
    <div className='page-id-container'>
      <input
        type='text'
        placeholder='Page ID'
        maxLength={25}
        name='pageId'
        onChange={
          props.pagesFuncs.pages.currentPage.update.onChangeCurrentPageId
        }
        value={currentPageId}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Page ID' content={pageIdEl} />
}
