import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Button from 'components/button'
import Dialog from 'components/dialog'

import { addTask, addSubtask, findTaskById } from 'store/tasks'
import { generateRandomString } from 'lib'

import stl from './AddTask.module.scss'

const AddTask = ({ id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [val, setVal] = useState('')

  const tasks = useSelector(state => state.tasks)
  const parentTask = id ? findTaskById(tasks, id) : {}

  const dispatch = useDispatch()

  const inputId = 'input'
  const openDialog = () => {
    setIsDialogOpen(true)
    setTimeout(() => {
      const input = document.querySelector(`#${inputId}`)
      input?.focus()
    }, 100)
  }

  const handleSubmit = () => {
    if (id) dispatch(addSubtask(val, id))
    else dispatch(addTask(val, generateRandomString(12)))

    setIsDialogOpen(false)
    setVal('')
  }

  return (
    <>
      <Button label={id ? 'Add Subtask' : 'Add Task'} onClick={openDialog} />

      <Dialog
        isOpen={isDialogOpen}
        close={() => setIsDialogOpen(false)}
        customClass={stl.dialog}
        blur
      >
        <Dialog.Header
          title={parentTask.text || 'Add Task'}
          close={() => setIsDialogOpen(false)}
        />

        <input
          id={inputId}
          type="text"
          placeholder="Add task"
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key == 'Enter' && handleSubmit()}
          className={stl.input}
          autoComplete="off"
        />

        <Dialog.Footer onSubmit={handleSubmit} />
      </Dialog>
    </>
  )
}

AddTask.propTypes = {
  id: PropTypes.string,
}

export default AddTask
