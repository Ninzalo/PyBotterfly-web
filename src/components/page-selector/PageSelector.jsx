import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu.jsx'
import './PageSelector.css'

export default function PageSelector(props) {
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

  const pagesMenuEl = (
    <>
      {pagesIds}
      {!props.pagesFuncs.previewMode && (
        <div
          className='page-selector-add-item clickable'
          onClick={props.pagesFuncs.addEmptyPage}
        >
          <div className='line vertical-line top-line'></div>
          <div className='line horizontal-line'></div>
          <div className='line vertical-line bottom-line'></div>
        </div>
      )}
    </>
  )

  return (
    <div className='page-selector'>
      <DropDownMenu menuTitle='Pages' content={pagesMenuEl} />
    </div>
  )
}
