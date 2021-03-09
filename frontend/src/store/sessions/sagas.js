import { put, call, takeLatest } from 'redux-saga/effects'
import { toastr } from 'react-redux-toastr'

import * as actions from './actions'

function* createSession(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`,  data)
    yield put(actions.sessionCreateSuccess(resource, detail, { data }, thunk))
    toastr.success('Success', 'You are successfully login!')
  } catch (e) {
    yield put(actions.sessionCreateFailure(resource, e, { data }, thunk))
    toastr.error('Oops!', 'Something went wrong...')
  }
}

function* showSession(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.sessionShowSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.sessionShowFailure(resource, e, thunk))
  }
}

function* deleteSession(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.delete], `/${resource}`)
    yield put(actions.sessionDeleteSuccess(resource, detail, thunk))
    toastr.success('Success', 'You successfully logout!')
  } catch (e) {
    yield put(actions.sessionDeleteFailure(resource, e, thunk))
    toastr.error('Oops! Something went wrong...')
  }
}

function* getUsers(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.getUsersSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.getUsersFailure(resource, e, thunk))
  }
}

function* watchSessionCreateRequest(api, { payload, meta }) {
  yield call(createSession, api, payload, meta)
}

function* watchSessionShowRequest(api, { meta }) {
  yield call(showSession, api, meta)
}

function* watchSessionDeleteRequest(api, { meta }) {
  yield call(deleteSession, api, meta)
}

function* watchGetUsersRequest(api, { meta }) {
  yield call(getUsers, api, meta)
}

export default function* ({ api }) {
  yield takeLatest(actions.SESSION_CREATE_REQUEST, watchSessionCreateRequest, api)
  yield takeLatest(actions.SESSION_SHOW_REQUEST, watchSessionShowRequest, api)
  yield takeLatest(actions.SESSION_DELETE_REQUEST, watchSessionDeleteRequest, api)
  yield takeLatest(actions.GET_USERS_REQUEST, watchGetUsersRequest, api)
}