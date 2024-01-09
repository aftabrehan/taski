import { useSelector } from 'react-redux'

import Task from 'components/task'

import stl from './TaskList.module.scss'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)

  return (
    <div className={stl.list}>
      {tasks.length ? (
        tasks.map(task => <Task key={task.id} task={task} />)
      ) : (
        <p className={stl.text}>Create tasks to achieve more.</p>
      )}
    </div>
  )
}

export default TaskList
