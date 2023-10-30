import React from 'react'
import Button from './Button.jsx'
import './Page.css'

export default function Page(props) {
  return (
    <div className='page'>
      <TopInfoContainer projectName={props.projectName} />
      <MessageContainer projectName={props.projectName} />
      <ButtonsContainer />
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
    </div>
  )
}

function MessageContainer(props) {
  return (
    <div className='message-container'>
      <BotLogo />
      <div className='message-output'>
        <h3>{props.projectName}</h3>
        <div className='textarea'>Input text here...</div>
        <InlineButtonsContainer />
      </div>
    </div>
  )
}

function InlineButtonsContainer() {
  return (
    <div className='inline-buttons-container'>
      <ButtonRowsContainer />
      <ButtonRowsContainer />
    </div>
  )
}

function ButtonsContainer() {
  return (
    <div className='buttons-container'>
      <ButtonRowsContainer />
    </div>
  )
}

function ButtonRowsContainer() {
  return (
    <div className='button-rows-container'>
      <Button color='blue' />
      <Button color='blue' />
    </div>
  )
}
