import './Navbar.css'
import React from 'react'
import Switch from '../switch/Switch'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div
        className='toggle-leftsidebar clickable'
        onClick={props.leftSidebarFuncs.toggleLeftSidebarOpened}
      >
        <div className='toggle-leftsidebar-line'></div>
        <div className='toggle-leftsidebar-line'></div>
        <div className='toggle-leftsidebar-line'></div>
      </div>
      <h1>PyBotterfly Creator</h1>
      {props.pagesFuncs.pages.get.pages.length > 0 && (
        <div className='preview-mode-container'>
          <h3>Preview Mode</h3>
          <Switch
            toggleSwitch={props.previewModeFuncs.togglePreviewMode}
            switchState={props.previewModeFuncs.previewMode}
          />
        </div>
      )}
    </div>
  )
}
