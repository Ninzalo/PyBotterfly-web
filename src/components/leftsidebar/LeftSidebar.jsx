import React from 'react'
import '../Sidebar.css'
import ProjectNameContainer from './ProjectNameContainer'
import MaxButtonsContainer from './MaxButtonsContainer'
import MaxRowsContainer from './MaxRowsContainer'
import AllowedPhotoExtensionsContainer from './AllowedPhotoExtensionsContainer'
import AllowedFileExtensionsContainer from './AllowedFileExtensionsContainer'

export default function LeftSidebar(props) {
  return (
    <div className='sidebar left-sidebar'>
      <h1>General Settings</h1>
      <ProjectNameContainer {...props} />
      <MaxButtonsContainer {...props} />
      <MaxRowsContainer {...props} />
      <AllowedPhotoExtensionsContainer {...props} />
      <AllowedFileExtensionsContainer {...props} />
    </div>
  )
}
