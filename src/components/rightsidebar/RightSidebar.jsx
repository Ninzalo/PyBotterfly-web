import React from 'react'
import '../Sidebar.css'
import PageIdContainer from './PageIdContainer'
import MessageTextContainer from './MessageTextContainer'
import ButtonsSettingsContainer from './ButtonsSettingsContainer'

export default function RightSidebar(props) {
  return (
    <div className='sidebar right-sidebar'>
      <h1>Page Settings</h1>
      <h2 className='page-id-display'>
        Page ID: {props.pagesFuncs.currentPage?.pageId}
      </h2>
      <PageIdContainer
        dropDownArrow={props.dropDownArrow}
        pagesFuncs={props.pagesFuncs}
      />
      <MessageTextContainer
        dropDownArrow={props.dropDownArrow}
        pagesFuncs={props.pagesFuncs}
      />
      <ButtonsSettingsContainer
        dropDownArrow={props.dropDownArrow}
        pagesFuncs={props.pagesFuncs}
      />
    </div>
  )
}
