import React from 'react'
import DropDownMenu from '../../dropdownmenu/DropDownMenu'
import { defaultButtonColors } from '../../../DefaultValues'
import './ColorSetting.css'

export default function ButtonColorSetting(props) {
  const currentButtonColor =
    props.pagesFuncs.pages.currentPage.keyboard.buttons.get.findCurrentButton(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    ).color

  const currentButtonColorEl = (
    <div className='current-button-color'>{currentButtonColor}</div>
  )

  const buttonColorPicker = (
    <ButtonColorPicker
      buttonRow={props.buttonRow}
      buttonNum={props.buttonNum}
      button={props.button}
      buttonColor={currentButtonColor}
      pagesFuncs={props.pagesFuncs}
    />
  )

  const buttonColorEl = (
    <div className='button-color-setting'>{buttonColorPicker}</div>
  )

  return (
    <DropDownMenu
      menuTitle='Color:'
      nameElement={currentButtonColorEl}
      content={buttonColorEl}
    />
  )
}

function ButtonColorPicker(props) {
  const allowedColors = defaultButtonColors.map((color) => {
    return (
      <ButtonColorItem
        key={`color-${props.buttonRow}-${props.buttonNum}-${props.button.id}-${color}`}
        itemName={color}
        isChecked={props.buttonColor === color ? true : false}
        onClick={() =>
          props.pagesFuncs.pages.currentPage.keyboard.button.field.color.update.currentColor(
            props.buttonRow,
            props.buttonNum,
            props.button.id,
            color,
          )
        }
      />
    )
  })

  return <div className='button-color-picker'>{allowedColors}</div>
}

function ButtonColorItem(props) {
  return (
    <div className='color-item clickable' onClick={props.onClick}>
      <span className='material-symbols-outlined'>
        {props.isChecked ? 'radio_button_checked' : 'radio_button_unchecked'}
      </span>
      <h3>{props.itemName}</h3>
    </div>
  )
}
