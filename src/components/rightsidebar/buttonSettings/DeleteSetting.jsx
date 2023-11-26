import React from 'react'
import ActionWithAccept from '../../actionWithAccept/ActionWithAccept'

export default function DeleteButtonSetting(props) {
  const title = `Delete button`
  const acceptAction = () => {
    props.pagesFuncs.pages.currentPage.keyboard.button.remove.update.removeButton(
      props.buttonRow,
      props.buttonNum,
      props.button.id,
    )
  }
  const customAcceptText = 'Are you sure?'

  return (
    <div className='button-delete-setting'>
      <ActionWithAccept
        actionTitle={title}
        acceptAction={acceptAction}
        customAcceptText={customAcceptText}
      />
    </div>
  )
}
