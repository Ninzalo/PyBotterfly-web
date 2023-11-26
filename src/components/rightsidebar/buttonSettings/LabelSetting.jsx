import React from 'react'
import DropDownMenu from '../../dropdownmenu/DropDownMenu'
import Switch from '../../switch/Switch'
import { defaultButtonSettings } from '../../../DefaultValues'
import './LabelSetting.css'

export default function ButtonLabelSetting(props) {
  const buttonLabel =
    props.pagesFuncs.pages.currentPage.keyboard.button.field.label.get.currentButtonLabel(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )

  const buttonLabelInputEl = (
    <div className='button-label-input'>
      <input
        type='text'
        placeholder='Button'
        maxLength={defaultButtonSettings.maxLabelLength}
        onChange={(event) =>
          props.pagesFuncs.pages.currentPage.keyboard.button.field.update.onChangeButtonField(
            props.buttonRow,
            props.buttonNum,
            props.button.id,
            'label',
            event.target.value,
          )
        }
        value={buttonLabel}
      />
    </div>
  )

  const toggleIsCustomLabel = () => {
    props.pagesFuncs.pages.currentPage.keyboard.button.field.label.update.toggleIsCustomLabel(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )
  }

  const currentButtonIsCustomLabel =
    props.pagesFuncs.pages.currentPage.keyboard.button.field.label.get.currentButtonIsCustomLabel(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )

  const isCustomLabelEl = (
    <div className='is-custom-label-container'>
      <Switch
        toggleSwitch={toggleIsCustomLabel}
        switchState={currentButtonIsCustomLabel}
      />
      <h3>Custom Label</h3>
    </div>
  )

  return (
    <DropDownMenu
      menuTitle='Label:'
      nameElement={buttonLabelInputEl}
      content={isCustomLabelEl}
    />
  )
}
