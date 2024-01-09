import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import taskReducer from './tasks/reducer'

import { errorTypes, allTypes } from 'store/utils'

const appReducer = combineReducers({
  tasks: taskReducer,
})

const { CLEAR_STORE } = allTypes

const rootReducer = (state, action) => {
  if ([CLEAR_STORE].includes(action.type)) {
    storage.removeItem('persist:root')
    return appReducer({}, action)
  }

  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['tasks'],
  blacklist: ['persist'],
}

const reducer = persistReducer(persistConfig, rootReducer)

const ignoredActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  ...errorTypes,
]

export { reducer, ignoredActions }
