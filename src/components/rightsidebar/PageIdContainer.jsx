import React from 'react'
import DropDownItem from '../leftsidebar/DropDownItem'

export default function PageIdContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='page-id-container'>
      {props.pagesFuncs.currentPage.pageId === '' && (
        <p className='warning-text'>Page ID must be filled</p>
      )}
      {props.pagesFuncs.currentPage.pageId !== '' &&
        !props.pagesFuncs.isPageIdUnique(
          props.pagesFuncs.currentPage?.pageId,
        ) && <p className='warning-text'>Page ID must be unique</p>}
      {
        <DropDownItem
          dropDownArrow={props.dropDownArrow}
          toggleItem={toggleOpened}
          isItemCurrentOpened={itemOpened}
          dropDownItemName='Page ID'
        />
      }
      {itemOpened && (
        <input
          type='text'
          placeholder='Page ID'
          maxLength={25}
          name='pageId'
          onChange={props.pagesFuncs.onChangeCurrentPageId}
          value={props.pagesFuncs.currentPage?.pageId}
        />
      )}
    </div>
  )
}
