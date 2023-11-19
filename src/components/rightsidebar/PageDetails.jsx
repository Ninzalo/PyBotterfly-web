import React from 'react'
import './PageDetails.css'

export default function PageDetails(props) {
  return (
    <div className='page-details-container'>
      <h2 className='page-id-display-text'>
        {`Page ID: ${props.pagesFuncs.currentPage?.pageId}`}
      </h2>
      {props.pagesFuncs.currentPage.pageId === '' && (
        <p className='warning-text'>Page ID must be filled</p>
      )}
      {props.pagesFuncs.currentPage.pageId !== '' &&
        !props.pagesFuncs.isPageIdUnique(
          props.pagesFuncs.currentPage?.pageId,
        ) && <p className='warning-text'>Page ID must be unique</p>}
    </div>
  )
}
