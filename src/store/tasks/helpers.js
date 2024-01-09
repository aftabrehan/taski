export const findTaskById = (tasks, id) => {
  for (const task of tasks) {
    if (task.id === id) return task

    const subtask = findTaskById(task.subtasks, id)
    if (subtask) return subtask
  }

  return null
}

export const addSubtaskToTask = (tasks, parentId, subtask) => {
  const addSubtaskRecursive = tasks => {
    return tasks.map(task => {
      if (task.id === parentId) {
        // Found the parent task, add the subtask
        return {
          ...task,
          subtasks: [...task.subtasks, subtask],
        }
      } else if (task.subtasks.length > 0) {
        // Continue searching in the subtasks
        return {
          ...task,
          subtasks: addSubtaskRecursive(task.subtasks),
        }
      }
      // Task not found, return as is
      return task
    })
  }

  return addSubtaskRecursive(tasks)
}

export const updateTaskCompletion = (tasks, taskId) => {
  const updateCompletionRecursive = tasks => {
    return tasks.map(task => ({
      ...task,
      completed: task.id === taskId ? !task.completed : task.completed,
      subtasks: updateCompletionRecursive(task.subtasks),
    }))
  }

  return updateCompletionRecursive(tasks)
}

export const deleteTaskById = (state, taskId) => {
  const deleteTaskRecursive = tasks => {
    return tasks.reduce((acc, task) => {
      if (task.id === taskId) {
        // Task found, skip it (delete)
      } else {
        // Task not found, keep it in the list
        const updatedTask = {
          ...task,
          subtasks: deleteTaskRecursive(task.subtasks),
        }
        acc.push(updatedTask)
      }
      return acc
    }, [])
  }

  return deleteTaskRecursive(state)
}
