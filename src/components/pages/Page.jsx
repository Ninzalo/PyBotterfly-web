import React from 'react'
import Button from './Button.jsx'
import './Page.css'

export default function Page(props) {
  const keyboardType = props.pagesFuncs.currentPage.keyboardType
  return (
    <div className='page'>
      <TopInfoContainer
        projectName={props.projectName}
        onDelete={() => props.pagesFuncs.removePage(props.internalPageId)}
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
  const keyboardType = props.pagesFuncs.currentPage.keyboardType
  return (
    <div className='message-container'>
      <BotLogo />
      <div className='message-output'>
        <h3>{props.projectName}</h3>
        <div className='textarea'>{props.pagesFuncs.currentPage.text}</div>
        {(keyboardType === 'empty' || keyboardType === 'inline') && (
          <InlineButtonsContainer pagesFuncs={props.pagesFuncs} />
        )}
      </div>
    </div>
  )
}

function generateRows(props, onClickNewType) {
  let buttonRowsContainers = props.pagesFuncs.currentPage?.rows
    .sort((a, b) => a.rowNum - b.rowNum)
    .map((row) => {
      const handleEmptyRowClick = () =>
        props.pagesFuncs.keyboard.addButtonAndRow(row.rowNum)
      const handleIncompleteRowClick = () =>
        props.pagesFuncs.keyboard.addButtonInRow(row.rowNum)
      const handleChangeKeyboardType = () =>
        props.pagesFuncs.keyboard.changeType(onClickNewType)
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
  const buttons = props.buttons?.map((button) => (
    <Button
      key={button.id}
      label={button.label}
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
    props.pagesFuncs.keyboard.countButtonsAmount() <
      props.pagesFuncs.keyboard.maxButtonsAmount &&
    !props.pagesFuncs.previewMode
  ) {
    if (
      buttons.length === 0 &&
      props.pagesFuncs.keyboard.currentPageRows().length - 1 <
        props.pagesFuncs.keyboard.maxRows
    ) {
      buttons.push(emptyRowButton)
    } else if (
      buttons.length > 0 &&
      buttons.length < props.pagesFuncs.keyboard.maxButtonsInRow
    ) {
      buttons.push(incompleteRowButton)
    }
  }

  return <div className='button-row-container'>{buttons}</div>
}
