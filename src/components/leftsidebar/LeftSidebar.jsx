import React from 'react'
import '../Sidebar.css'
import ProjectNameContainer from './ProjectNameContainer'
import MaxButtonsAmountContainer from './MaxButtonsAmountComponent'
import MaxButtonsInRowContainer from './MaxButtonsInRowContainer'
import MaxRowsContainer from './MaxRowsContainer'
import AllowedPhotoExtensionsContainer from './AllowedPhotoExtensionsContainer'
import AllowedFileExtensionsContainer from './AllowedFileExtensionsContainer'
import DebugStateContainer from './DebugStateContainer'

export default function LeftSidebar(props) {
  return (
    <div className='sidebar left-sidebar'>
      <h1>General Settings</h1>
      <ProjectNameContainer {...props} />
      <MaxButtonsAmountContainer {...props} />
      <MaxButtonsInRowContainer {...props} />
      <MaxRowsContainer {...props} />
      <AllowedPhotoExtensionsContainer {...props} />
      <AllowedFileExtensionsContainer {...props} />
      <DebugStateContainer {...props} />
    </div>
  )
}
