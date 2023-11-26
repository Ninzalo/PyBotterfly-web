import React from 'react'
import Button from './Button.jsx'
import { emptyButtonData } from '../../DefaultValues'
import './Page.css'

export default function Page(props) {
  const keyboardType =
    props.pagesFuncs.pages.currentPage.keyboard.type.get.type()
  return (
    <div className='page'>
      <TopInfoContainer
        projectName={props.projectName}
        onDelete={() =>
          props.pagesFuncs.pages.update.removePageById(props.internalPageId)
        }
      />
      <MessageContainer
        projectName={props.projectName}
        pagesFuncs={props.pagesFuncs}
      />
      {(keyboardType === 'empty' || keyboardType === 'default') && (
        <ButtonsContainer pagesFuncs={props.pagesFuncs} />
      )}
    </div>
  )
}

function BotLogo() {
  return <div className='bot-logo'></div>
}

function TopInfoContainer(props) {
  return (
    <div className='top-info'>
      <BotLogo />
      <h2>{props.projectName}</h2>
      <span
        className='material-symbols-outlined clickable trash-ico'
        onClick={props.onDelete}
      >
        delete
      </span>
    </div>
  )
}

function MessageContainer(props) {
  const keyboardType =
    props.pagesFuncs.pages.currentPage.keyboard.type.get.type()
  return (
    <div className='message-container'>
      <BotLogo />
      <div className='message-output'>
        <h3>{props.projectName}</h3>
        <div className='textarea'>
          {props.pagesFuncs.pages.currentPage.get.currentPageText()}
        </div>
        {(keyboardType === 'empty' || keyboardType === 'inline') && (
          <InlineButtonsContainer pagesFuncs={props.pagesFuncs} />
        )}
      </div>
    </div>
  )
}

function generateRows(props, onClickNewType) {
  let buttonRowsContainers =
    props.pagesFuncs.pages.currentPage.keyboard.rows.get
      .currentPageRows()
      .sort((a, b) => a.rowNum - b.rowNum)
      .map((row) => {
        const handleEmptyRowClick = () =>
          props.pagesFuncs.pages.currentPage.keyboard.rows.update.addEmptyButtonAndRow(
            row.rowNum,
          )
        const handleIncompleteRowClick = () =>
          props.pagesFuncs.pages.currentPage.keyboard.rows.update.addEmptyButtonInRow(
            row.rowNum,
          )
        const handleChangeKeyboardType = () =>
          props.pagesFuncs.pages.currentPage.keyboard.type.update.changeType(
            onClickNewType,
          )
        return (
          <ButtonRowContainer
            key={row.rowNum}
            buttons={row.buttons}
            rowNum={row.rowNum}
            pagesFuncs={props.pagesFuncs}
            handleEmptyRowClick={handleEmptyRowClick}
            handleIncompleteRowClick={handleIncompleteRowClick}
            handleChangeKeyboardType={handleChangeKeyboardType}
          />
        )
      })
  return buttonRowsContainers
}

function InlineButtonsContainer(props) {
  const onClickNewType = 'inline'
  return (
    <div className='inline-buttons-container'>
      {generateRows(props, onClickNewType)}
    </div>
  )
}

function ButtonsContainer(props) {
  const onClickNewType = 'default'
  return (
    <div className='buttons-container'>
      {generateRows(props, onClickNewType)}
    </div>
  )
}

function ButtonRowContainer(props) {
  const buttons = props.buttons
    ?.sort((a, b) => a.num - b.num)
    .map((button) => (
      <Button
        key={button.id}
        id={button.id}
        label={
          button.label === emptyButtonData.label
            ? `${emptyButtonData.label} ${props.rowNum + 1} ${button.num + 1}`
            : button.label
        }
        color={button.color}
        onClick={() => {}}
      />
    ))

  const emptyRowButton = (
    <Button
      key={`emptyRow${props.rowNum}`}
      label='+'
      color='positive'
      onClick={() => {
        props.handleEmptyRowClick()
        props.handleChangeKeyboardType()
      }}
    />
  )

  const incompleteRowButton = (
    <Button
      key={`incompleteRow${props.rowNum}`}
      label='+'
      color='positive'
      onClick={props.handleIncompleteRowClick}
    />
  )

  if (
    props.pagesFuncs.pages.currentPage.keyboard.buttons.get.countButtonsAmount() <
      props.pagesFuncs.pages.currentPage.keyboard.limits.get.maxButtonsAmount &&
    !props.pagesFuncs.constants.previewMode
  ) {
    if (
      buttons.length === 0 &&
      props.pagesFuncs.pages.currentPage.keyboard.rows.get.countRowsAmount() <
        props.pagesFuncs.pages.currentPage.keyboard.limits.get.maxRows
    ) {
      buttons.push(emptyRowButton)
    } else if (
      buttons.length > 0 &&
      buttons.length <
        props.pagesFuncs.pages.currentPage.keyboard.limits.get.maxButtonsInRow
    ) {
      buttons.push(incompleteRowButton)
    }
  }

  return <div className='button-row-container'>{buttons}</div>
}
