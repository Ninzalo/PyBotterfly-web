import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import Switch from '../switch/Switch'

export default function PreviewModeContainer(props) {
  const previewModeEl = (
    <div className='preview-mode-container'>
      <Switch
        toggleSwitch={props.previewModeFuncs.togglePreviewMode}
        switchState={props.previewModeFuncs.previewMode}
      />
    </div>
  )

  return <DropDownMenu menuTitle='Preview Mode' content={previewModeEl} />
}
