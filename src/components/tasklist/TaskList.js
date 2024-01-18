import { useSelector } from 'react-redux'

import Task from 'components/task'

import stl from './TaskList.module.scss'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const reversedTasks = [...tasks].reverse()

  return (
    <div className={stl.list}>
      {reversedTasks.length ? (
        reversedTasks.map(task => <Task key={task.id} task={task} />)
      ) : (
        <p className={stl.text}>Create tasks to achieve more.</p>
      )}
    </div>
  )
}

export default TaskList
