import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import Button from 'components/button'
import CheckBox from 'components/checkbox'
import OpenTaskDialog from 'components/open-task-dialog'

import { toggleComplete, deleteTask } from 'store/tasks'

import stl from './Task.module.scss'

const Task = ({ task }) => {
  const [isOpenTaskDialogOpen, setIsOpenDialogOpen] = useState(false)
  const dispatch = useDispatch()

  const openTask = () => setIsOpenDialogOpen(true)
  const handleDeleteTask = () => dispatch(deleteTask(task.id))

  return (
    <div className={clsx(stl.task, task.completed && stl.completed)}>
      <CheckBox
        isChecked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
        label={task.text}
      />

      <div className={stl.btnWrapper}>
        <Button label="Open" variant="primary" onClick={openTask} />
        <Button label="Delete" variant="error" onClick={handleDeleteTask} />
      </div>

      <OpenTaskDialog
        isOpen={isOpenTaskDialogOpen}
        close={() => setIsOpenDialogOpen(false)}
        task={task}
      />
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
}

export default Task
