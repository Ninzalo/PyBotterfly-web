import React from 'react'
import './PageDetails.css'

export default function PageDetails(props) {
  const errorsOnPage = props.pagesFuncs.pages.currentPage.errors.get
    .pageErrors()
    .map((errorOnPage) => (
      <p key={errorOnPage.replace(/\s+/g, '')} className='warning-text'>
        {errorOnPage}
      </p>
    ))

  return (
    <div className='page-details-container'>
      <h2 className='page-id-display-text'>
        {`Page ID: ${props.pagesFuncs.pages.currentPage.get.currentPageId()}`}
      </h2>
      {errorsOnPage}
    </div>
  )
}
