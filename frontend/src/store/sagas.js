import { all, fork } from 'redux-saga/effects'

import sessionsSagas from './sessions/sagas'
import jobsSagas from './jobs/sagas'

const sagas = [
  sessionsSagas,
  jobsSagas,
]

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}