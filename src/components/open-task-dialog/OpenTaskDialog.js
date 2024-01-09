import PropTypes from 'prop-types'

import Dialog from 'components/dialog'
import Task from 'components/task'
import AddTask from 'components/add-task'

import stl from './OpenTaskDialog.module.scss'

const OpenTaskDialog = ({ isOpen, close, task }) => {
  return (
    <Dialog isOpen={isOpen} close={close} customClass={stl.dialog} blur>
      <Dialog.Header title={task.text} close={close} />
      <div className={stl.titleBar}>
        <h3>Subtasks</h3>
        <AddTask id={task.id} />
      </div>
      {task.subtasks.length ? (
        <div className={stl.list}>
          {task.subtasks.map(subtask => (
            <Task key={subtask.id} task={subtask} />
          ))}
        </div>
      ) : (
        <p className={stl.text}>No Subtasks</p>
      )}
    </Dialog>
  )
}

OpenTaskDialog.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  task: PropTypes.object,
}

export default OpenTaskDialog
