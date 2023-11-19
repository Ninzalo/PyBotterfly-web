import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import {
  emptyButtonData,
  buttonSettingObj,
  defaultButtonSettings,
  defaultButtonColors,
} from '../../DefaultValues'
import './ButtonsSettingsContainer.css'
import Switch from '../switch/Switch'

export default function ButtonsSettingsContainer(props) {
  let buttons = []
  for (let i = 0; i < props.pagesFuncs.currentPage.rows.length; i++) {
    const currentRow = props.pagesFuncs.currentPage.rows[i]
    for (let j = 0; j < currentRow.buttons.length; j++) {
      const currentButton = currentRow.buttons[j]
      const currentButtonObj = {
        ...buttonSettingObj,
        row: i,
        num: j,
        button: currentButton,
      }
      if (currentButton.id) {
        const key = `settings-${currentButton.id}`
        buttons.push(
          <ButtonSettings
            key={key}
            buttonRow={i}
            buttonNum={j}
            button={currentButtonObj.button}
            buttonName={
              currentButtonObj.button.label === emptyButtonData.label
                ? `${emptyButtonData.label} ${currentButtonObj.row + 1} ${
                    currentButtonObj.num + 1
                  }`
                : currentButtonObj.button.label
            }
            pagesFuncs={props.pagesFuncs}
          />,
        )
      }
    }
  }

  if (buttons.length === 0) return <></>

  const buttonsSettingsEl = (
    <div className='buttons-settings-container'>
      <>{buttons}</>
    </div>
  )

  return (
    <DropDownMenu menuTitle='Button settings' content={buttonsSettingsEl} />
  )
}

function ButtonSettings(props) {
  const currentButtonLabel = (
    <div className='current-button-label'>{props.buttonName}</div>
  )

  // <ButtonActionSetting
  //   buttonRow={props.buttonRow}
  //   buttonNum={props.buttonNum}
  //   button={props.button}
  //   pagesFuncs={props.pagesFuncs}
  // />

  const buttonSettingsEl = (
    <div className='button-settings-container'>
      <div className='button-settings'>
        <ButtonLabelSetting
          buttonRow={props.buttonRow}
          buttonNum={props.buttonNum}
          button={props.button}
          pagesFuncs={props.pagesFuncs}
        />
        <ButtonColorSetting
          buttonRow={props.buttonRow}
          buttonNum={props.buttonNum}
          button={props.button}
          pagesFuncs={props.pagesFuncs}
        />
      </div>
    </div>
  )

  return (
    <DropDownMenu
      menuTitle='Button:'
      nameElement={currentButtonLabel}
      content={buttonSettingsEl}
    />
  )
}

function ButtonLabelSetting(props) {
  const buttonLabel =
    props.pagesFuncs.keyboard.button.label.get.currentButtonLabel(
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
          props.pagesFuncs.keyboard.button.onChangeButtonField(
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
    props.pagesFuncs.keyboard.button.label.update.toggleIsCustomLabel(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )
  }

  const currentButtonIsCustomLabel =
    props.pagesFuncs.keyboard.button.label.get.currentButtonIsCustomLabel(
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

function ButtonColorSetting(props) {
  const currentButtonColor = props.pagesFuncs.keyboard.findCurrentButton(
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
          props.pagesFuncs.keyboard.button.onChangeButtonField(
            props.buttonRow,
            props.buttonNum,
            props.button.id,
            'color',
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

function ButtonActionSetting(props) {
  const actionEl = (
    <div className='button-action-setting'>
      <></>
    </div>
  )

  return <DropDownMenu menuTitle='Action' content={actionEl} />
}

function DeleteItemSetting(props) {
  return <></>
}
