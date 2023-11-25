import React from 'react'
import DropDownMenu from '../dropdownmenu/DropDownMenu'
import ButtonLabelSetting from './buttonSettings/LabelSetting'
import ButtonColorSetting from './buttonSettings/ColorSetting'
import ButtonPositionSetting from './buttonSettings/PositionSetting'
import DeleteButtonSetting from './buttonSettings/DeleteSetting'
import { emptyButtonData, buttonSettingObj } from '../../DefaultValues'
import './ButtonsSettingsContainer.css'

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
        <ButtonPositionSetting
          buttonRow={props.buttonRow}
          buttonNum={props.buttonNum}
          button={props.button}
          pagesFuncs={props.pagesFuncs}
        />
        <DeleteButtonSetting
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
