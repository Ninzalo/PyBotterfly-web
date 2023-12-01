import React from 'react'
import Page from './Page.jsx'
import './Page.css'

export default function PreviewConstructor(props) {
  let page
  if (props.pagesFuncs.pages.currentPage.get.currentPage()) {
    page = (
      <Page
        key={props.pagesFuncs.pages.currentPage.get.currentPage().id}
        projectName={props.projectNameFuncs.projectName}
        pagesFuncs={props.pagesFuncs}
      />
    )
  }

  return (
    <>
      {!page ? (
        <div
          className='empty-pages-list clickable'
          onClick={props.pagesFuncs.pages.update.addEmptyPage}
        >
          <div className='line vertical-line top-line'></div>
          <div className='line horizontal-line'></div>
          <div className='line vertical-line bottom-line'></div>
        </div>
      ) : (
        page
      )}
    </>
  )
}
