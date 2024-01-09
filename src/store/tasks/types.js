import { createActionTypes } from 'lib'

export const ADD_TASK = 'ADD_TASK'
export const ADD_SUBTASK = 'ADD_SUBTASK'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const DELETE_TASK = 'DELETE_TASK'
export const CLEAR_STORE = 'CLEAR_STORE'

export default createActionTypes([
  ADD_TASK,
  ADD_SUBTASK,
  TOGGLE_COMPLETE,
  DELETE_TASK,
  CLEAR_STORE,
])
