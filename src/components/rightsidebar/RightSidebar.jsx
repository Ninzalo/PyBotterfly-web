import React from 'react'
import '../Sidebar.css'
import MessageTextContainer from './MessageTextContainer'

export default function RightSidebar(props) {
  return (
    <div className='sidebar right-sidebar'>
      <h1>Page Settings</h1>
      <MessageTextContainer
        dropDownArrow={props.dropDownArrow}
        pagesFuncs={props.pagesFuncs}
      />
    </div>
  )
}
