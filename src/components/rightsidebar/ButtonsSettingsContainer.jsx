import React from 'react'
import DropDownItem from '../leftsidebar/DropDownItem'
import {
  emptyButtonData,
  buttonSettingObj,
  defaultButtonSettings,
  defaultButtonColors,
} from '../../DefaultValues'
import './ButtonsSettingsContainer.css'
import Switch from '../switch/Switch'

export default function ButtonsSettingsContainer(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

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
            dropDownArrow={props.dropDownArrow}
          />,
        )
      }
    }
  }

  if (buttons.length === 0) return <></>

  return (
    <div className='buttons-settings-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Buttons settings'
      />
      {itemOpened && <>{buttons}</>}
    </div>
  )
}

function ButtonSettings(props) {
  const [buttonOpened, setButtonOpened] = React.useState(false)

  function toggleButton() {
    setButtonOpened((prevState) => !prevState)
  }

  // <ButtonActionSetting
  //   buttonRow={props.buttonRow}
  //   buttonNum={props.buttonNum}
  //   button={props.button}
  //   pagesFuncs={props.pagesFuncs}
  //   dropDownArrow={props.dropDownArrow}
  // />

  return (
    <div className='button-settings-container'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleButton}
        isItemCurrentOpened={buttonOpened}
        dropDownItemName={`Button: ${props.buttonName}`}
      />
      {buttonOpened && (
        <div className='button-settings'>
          <ButtonLabelSetting
            buttonRow={props.buttonRow}
            buttonNum={props.buttonNum}
            button={props.button}
            pagesFuncs={props.pagesFuncs}
            dropDownArrow={props.dropDownArrow}
          />
          <ButtonColorSetting
            buttonRow={props.buttonRow}
            buttonNum={props.buttonNum}
            button={props.button}
            pagesFuncs={props.pagesFuncs}
            dropDownArrow={props.dropDownArrow}
          />
        </div>
      )}
    </div>
  )
}

function ButtonLabelSetting(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  const buttonLabel =
    props.pagesFuncs.keyboard.button.label.get.currentButtonLabel(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )

  const dropDownEl = (
    <>
      {props.dropDownArrow(itemOpened)}
      <h3>Label: </h3>
    </>
  )

  const buttonLabelInputEl = (
    <input
      type='text'
      placeholder='Button'
      maxLength={defaultButtonSettings.maxLabelLength}
      name='buttonLabel'
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
    <>
      <Switch
        toggleSwitch={toggleIsCustomLabel}
        switchState={currentButtonIsCustomLabel}
      />
      <h3>Custom Label</h3>
    </>
  )

  return (
    <div className='button-label-setting'>
      <div className='preview'>
        <div className='dropdown clickable' onClick={toggleOpened}>
          {dropDownEl}
        </div>
        <>{buttonLabelInputEl}</>
      </div>
      {itemOpened && <div className='details'>{isCustomLabelEl}</div>}
    </div>
  )
}

function ButtonColorSetting(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }
  const buttonColor = props.pagesFuncs.keyboard.findCurrentButton(
    props.buttonRow,
    props.buttonNum,
    props.button.id,
  ).color

  const buttonColorPicker = (
    <ButtonColorPicker
      buttonRow={props.buttonRow}
      buttonNum={props.buttonNum}
      button={props.button}
      buttonColor={buttonColor}
      pagesFuncs={props.pagesFuncs}
    />
  )

  return (
    <div className='button-color-setting'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName={`Color: ${buttonColor}`}
      />
      {itemOpened && <>{buttonColorPicker}</>}
    </div>
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
    <div className='allowed-item clickable' onClick={props.onClick}>
      <span className='material-symbols-outlined'>
        {props.isChecked ? 'radio_button_checked' : 'radio_button_unchecked'}
      </span>
      <h3>{props.itemName}</h3>
    </div>
  )
}

function ButtonActionSetting(props) {
  const [itemOpened, setItemOpened] = React.useState(false)

  function toggleOpened() {
    setItemOpened((prevState) => !prevState)
  }

  return (
    <div className='button-action-setting'>
      <DropDownItem
        dropDownArrow={props.dropDownArrow}
        toggleItem={toggleOpened}
        isItemCurrentOpened={itemOpened}
        dropDownItemName='Action'
      />
    </div>
  )
}

function DeleteItemSetting(props) {
  return <></>
}
