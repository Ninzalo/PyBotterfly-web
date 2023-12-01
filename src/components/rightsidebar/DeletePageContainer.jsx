import React from 'react'
import './DeletePageContainer.css'
import ActionWithAccept from '../actionWithAccept/ActionWithAccept'

export default function DeletePageContainer(props) {
  return (
    <div className='delete-page-container'>
      <ActionWithAccept
        key={`delete-page-${props.pagesFuncs.pages.currentPage.get.currentPageInternalId()}`}
        actionTitle='Delete page'
        acceptAction={() =>
          props.pagesFuncs.pages.update.removePageById(
            props.pagesFuncs.pages.currentPage.get.currentPageInternalId(),
          )
        }
        customAcceptText='Are you sure you want to delete this page?'
      />
    </div>
  )
}
