import React from 'react'
import '../Sidebar.css'
import PageDetails from './PageDetails'
import PageIdContainer from './PageIdContainer'
import MessageTextContainer from './MessageTextContainer'
import ButtonsSettingsContainer from './ButtonsSettingsContainer'

export default function RightSidebar(props) {
  return (
    <div className='sidebar right-sidebar'>
      <h1>Page Settings</h1>
      <PageDetails pagesFuncs={props.pagesFuncs} />
      <PageIdContainer pagesFuncs={props.pagesFuncs} />
      <MessageTextContainer pagesFuncs={props.pagesFuncs} />
      <ButtonsSettingsContainer pagesFuncs={props.pagesFuncs} />
    </div>
  )
}
