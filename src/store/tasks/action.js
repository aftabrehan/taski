import { ADD_TASK, ADD_SUBTASK, TOGGLE_COMPLETE, DELETE_TASK } from './types'

export const addTask = (text, parentId) => ({
  type: ADD_TASK,
  payload: { text, parentId },
})

export const addSubtask = (text, parentId) => ({
  type: ADD_SUBTASK,
  payload: { text, parentId },
})

export const toggleComplete = taskId => ({
  type: TOGGLE_COMPLETE,
  payload: taskId,
})

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  payload: taskId,
})
