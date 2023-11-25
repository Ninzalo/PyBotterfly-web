import React from 'react'
import DropDownMenu from '../../dropdownmenu/DropDownMenu'
import './PositionSetting.css'
import { nanoid } from 'nanoid'

export default function ButtonPositionSetting(props) {
  const currentButton = {
    row: props.buttonRow,
    num: props.buttonNum,
    id: props.button.id,
  }

  const allRowsArr = props.pagesFuncs.keyboard.button.position.get.allButtons()

  const allRowsEl = allRowsArr.map((row, index) => (
    <MiniRow
      key={`mini-row-${currentButton.id}-${index}`}
      currentButton={currentButton}
      row={row}
      rowNum={index}
      pagesFuncs={props.pagesFuncs}
    />
  ))

  const positionEl = <div className='button-position-setting'>{allRowsEl}</div>

  return <DropDownMenu menuTitle='Position' content={positionEl} />
}

function MiniRow(props) {
  const currentButtonId = props.currentButton.id
  let allButtonsEl = props.row.map((button) => {
    const row = button.row
    const num = button.num
    const id = button.id

    return (
      <MiniButton
        key={`mini-button-${currentButtonId}-${row}-${num}-${id}`}
        currentButton={props.currentButton}
        button={button}
        isNew={false}
        pagesFuncs={props.pagesFuncs}
      />
    )
  })

  if (allButtonsEl.length < props.pagesFuncs.limits.maxButtonsInRow) {
    const row = props.rowNum
    const num = allButtonsEl.length
    const id = nanoid()
    const buttonObj = { row: row, num: num, id: id }

    allButtonsEl.push(
      <MiniButton
        key={`mini-button-${currentButtonId}-${row}-${num}-${id}`}
        currentButton={props.currentButton}
        button={buttonObj}
        isNew={true}
        pagesFuncs={props.pagesFuncs}
      />,
    )
  }

  return <div className='mini-row'>{allButtonsEl}</div>
}

function MiniButton(props) {
  const isCurrent = props.currentButton.id === props.button.id ? 'current' : ''
  const isNew = props.isNew ? 'new' : ''
  const isClickable = !isCurrent ? 'clickable' : ''
  const className = `mini-button ${isCurrent} ${isNew} ${isClickable}`

  let onClickFunc
  if (!isCurrent && !isNew) {
    onClickFunc = () =>
      props.pagesFuncs.keyboard.button.position.update.replace(
        props.currentButton.row,
        props.currentButton.num,
        props.currentButton.id,
        props.button.row,
        props.button.num,
        props.button.id,
      )
  } else if (!isCurrent && isNew) {
    onClickFunc = () => {
      props.pagesFuncs.keyboard.button.position.update.replaceToNew(
        props.currentButton.row,
        props.currentButton.num,
        props.currentButton.id,
        props.button.row,
      )
    }
  } else {
    onClickFunc = () => {}
  }

  return <div className={className} onClick={onClickFunc}></div>
}
