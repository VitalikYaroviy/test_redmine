import { all, fork } from 'redux-saga/effects'

import sessionsSagas from './sessions/sagas'
import jobsSagas from './jobs/sagas'
// import authSagas from './auth/sagas'

const sagas = [
  sessionsSagas,
  jobsSagas,
  // authSagas
]

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}