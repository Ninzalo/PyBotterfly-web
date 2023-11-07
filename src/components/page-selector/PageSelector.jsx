import React from 'react'
import DropDownItem from '../leftsidebar/DropDownItem'
import './PageSelector.css'

export default function PageSelector(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  const pagesIds = props.pagesFuncs.pages
    .sort((a, b) => a.pageId.localeCompare(b.pageId))
    .map((page) => (
      <div
        key={`${page.id}-${page.pageId}-page-selector`}
        className='page-selector-item clickable'
        onClick={() => props.pagesFuncs.changeCurrentPage(page.id)}
      >
        <h3
          className={`${
            props.pagesFuncs.currentPageId === page.id ? 'active-page' : ''
          }`}
        >
          {page.pageId === '' ? 'Unnamed page' : page.pageId}
        </h3>
      </div>
    ))

  return (
    <div className='page-selector'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Pages'
      />
      {itemOpened && (
        <>
          {pagesIds}
          <div
            className='page-selector-add-item clickable'
            onClick={props.pagesFuncs.addEmptyPage}
          >
            <div className='line vertical-line top-line'></div>
            <div className='line horizontal-line'></div>
            <div className='line vertical-line bottom-line'></div>
          </div>
        </>
      )}
    </div>
  )
}
