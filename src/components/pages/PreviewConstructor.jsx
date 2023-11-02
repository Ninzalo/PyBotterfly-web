import React from 'react'
import Page from './Page.jsx'
import './Page.css'

export default function PreviewConstructor(props) {
  const prewievPage = props.pagesFuncs.pages.filter(
    (page) => page.id === props.pagesFuncs.currentPageId,
  )[0]
  let page

  if (prewievPage) {
    page = (
      <Page
        key={prewievPage.id}
        internalPageId={prewievPage.id}
        projectName={props.projectNameFuncs.projectName}
        pagesFuncs={props.pagesFuncs}
      />
    )
  } else {
    page = ''
  }

  return (
    <div>
      {!page ? (
        <div
          className='empty-pages-list clickable'
          onClick={props.pagesFuncs.addEmptyPage}
        >
          <div className='line vertical-line top-line'></div>
          <div className='line horizontal-line'></div>
          <div className='line vertical-line bottom-line'></div>
        </div>
      ) : (
        page
      )}
    </div>
  )
}
