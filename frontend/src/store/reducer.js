import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import sessions from './sessions/reducer'
import jobs from './jobs/reducer'

const reducers = {
  sessions,
  jobs,
  toastr: toastrReducer
}

export default combineReducers(reducers)