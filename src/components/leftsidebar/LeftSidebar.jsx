import React from 'react'
import '../Sidebar.css'
import ProjectNameContainer from './ProjectNameContainer'
import MaxButtonsAmountContainer from './MaxButtonsAmountComponent'
import MaxButtonsInRowContainer from './MaxButtonsInRowContainer'
import MaxRowsContainer from './MaxRowsContainer'
import AllowedPhotoExtensionsContainer from '../allowedExtensions/AllowedPhotoExtensionsContainer'
import AllowedFileExtensionsContainer from '../allowedExtensions/AllowedFileExtensionsContainer'
import DebugStateContainer from './DebugStateContainer'
import PreviewModeContainer from './PreviewModeContainer'

export default function LeftSidebar(props) {
  return (
    <div className='sidebar left-sidebar'>
      <h1>General Settings</h1>
      <ProjectNameContainer projectNameFuncs={props.projectNameFuncs} />
      <MaxButtonsAmountContainer
        maxButtonsAmountFuncs={props.maxButtonsAmountFuncs}
      />
      <MaxButtonsInRowContainer
        maxButtonsInRowFuncs={props.maxButtonsInRowFuncs}
      />
      <MaxRowsContainer maxRowsFuncs={props.maxRowsFuncs} />
      <AllowedPhotoExtensionsContainer
        photoExtensionsFuncs={props.photoExtensionsFuncs}
      />
      <AllowedFileExtensionsContainer
        fileExtensionsFuncs={props.fileExtensionsFuncs}
      />
      <DebugStateContainer debugStateFuncs={props.debugStateFuncs} />
      <PreviewModeContainer previewModeFuncs={props.previewModeFuncs} />

      <div className='empty-bottom-space'></div>
    </div>
  )
}
