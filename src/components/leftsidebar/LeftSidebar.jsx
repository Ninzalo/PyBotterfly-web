import React from 'react'
import '../Sidebar.css'
import ProjectNameContainer from './ProjectNameContainer'
import MaxButtonsAmountContainer from './MaxButtonsAmountComponent'
import MaxButtonsInRowContainer from './MaxButtonsInRowContainer'
import MaxRowsContainer from './MaxRowsContainer'
import AllowedPhotoExtensionsContainer from './AllowedPhotoExtensionsContainer'
import AllowedFileExtensionsContainer from './AllowedFileExtensionsContainer'
import DebugStateContainer from './DebugStateContainer'
import PreviewModeContainer from './PreviewModeContainer'

export default function LeftSidebar(props) {
  return (
    <div className='sidebar left-sidebar'>
      <h1>General Settings</h1>
      <ProjectNameContainer
        dropDownArrow={props.dropDownArrow}
        projectNameFuncs={props.projectNameFuncs}
      />
      <MaxButtonsAmountContainer
        dropDownArrow={props.dropDownArrow}
        maxButtonsAmountFuncs={props.maxButtonsAmountFuncs}
      />
      <MaxButtonsInRowContainer
        dropDownArrow={props.dropDownArrow}
        maxButtonsInRowFuncs={props.maxButtonsInRowFuncs}
      />
      <MaxRowsContainer
        dropDownArrow={props.dropDownArrow}
        maxRowsFuncs={props.maxRowsFuncs}
      />
      <AllowedPhotoExtensionsContainer
        dropDownArrow={props.dropDownArrow}
        photoExtensionsFuncs={props.photoExtensionsFuncs}
      />
      <AllowedFileExtensionsContainer
        dropDownArrow={props.dropDownArrow}
        fileExtensionsFuncs={props.fileExtensionsFuncs}
      />
      <DebugStateContainer
        dropDownArrow={props.dropDownArrow}
        debugStateFuncs={props.debugStateFuncs}
      />
      <PreviewModeContainer
        dropDownArrow={props.dropDownArrow}
        previewModeFuncs={props.previewModeFuncs}
      />
      <div className='empty-bottom-space'></div>
    </div>
  )
}
