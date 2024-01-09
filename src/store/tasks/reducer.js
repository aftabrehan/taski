import { ADD_TASK, ADD_SUBTASK, TOGGLE_COMPLETE, DELETE_TASK } from './types'
import {
  findTaskById,
  addSubtaskToTask,
  deleteTaskById,
  updateTaskCompletion,
} from './helpers'

import { generateRandomString } from 'lib'

const initialState = []

const taskReducer = (state = initialState, action) => {
  let newTask, parentTaskId, parentTask, newSubtask

  switch (action.type) {
    case ADD_TASK:
      newTask = {
        id: generateRandomString(12),
        text: action.payload.text,
        completed: false,
        parentId: action.payload.parentId,
        subtasks: [],
      }
      return [...state, newTask]

    case ADD_SUBTASK:
      parentTaskId = action.payload.parentId
      parentTask = findTaskById(state, parentTaskId)
      if (parentTask) {
        newSubtask = {
          id: generateRandomString(12),
          text: action.payload.text,
          completed: false,
          parentId: parentTaskId,
          subtasks: [],
        }
        return addSubtaskToTask(state, parentTaskId, newSubtask)
      }
      return state

    case TOGGLE_COMPLETE:
      const taskIdToToggle = action.payload
      return updateTaskCompletion(state, taskIdToToggle)

    case DELETE_TASK:
      const taskIdToDelete = action.payload
      return deleteTaskById(state, taskIdToDelete)

    default:
      return state
  }
}

export default taskReducer
