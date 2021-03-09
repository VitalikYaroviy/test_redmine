import { put, call, takeLatest } from 'redux-saga/effects'
// import { toastr } from 'react-redux-toastr'

import * as actions from './actions'

function* getJobs(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.getJobsSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.getJobsFailure(resource, e, thunk))
  }
}

function* getJob(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.getJobSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.getJobFailure(resource, e, thunk))
  }
}

function* createJob(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`,  data)
    yield put(actions.jobCreateSuccess(resource, detail, { data }, thunk))
  } catch (e) {
    yield put(actions.jobCreateFailure(resource, e, { data }, thunk))
  }
}

function* deleteJob(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.delete], `/${resource}`)
    yield put(actions.jobDeleteSuccess(resource, detail, thunk))
    // toastr.success('Success', 'You successfully loggout!')
  } catch (e) {
    yield put(actions.jobDeleteFailure(resource, e, thunk))
    // toastr.error('Oops! Something went wrong...')
  }
}

function* getFiltersJobs(api, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}`)
    yield put(actions.getFiltersJobsSuccess(resource, detail, thunk))
  } catch (e) {
    yield put(actions.getFiltersJobsFailure(resource, e, thunk))
  }
}

function* updateJob(api, { data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.put], `/${resource}`,  data)
    yield put(actions.jobUpdateSuccess(resource, detail, { data }, thunk))
    // yield put(actions.resourceGetRequest(`/clients?page=${currentPage}`, detail, thunk))
    // toastr.success('Success', 'Updated!')
  } catch (e) {
    yield put(actions.jobUpdateFailure(resource, e, { data }, thunk))
    // toastr.error('Oops! Something went wrong...')
  }
}

function* watchGetJobsRequest(api, { meta }) {
  yield call(getJobs, api, meta)
}

function* watchGetJobRequest(api, { meta }) {
  yield call(getJob, api, meta)
}

function* watchCreateJobRequest(api, { payload, meta }) {
  yield call(createJob, api, payload, meta)
}

function* watchJobDeleteRequest(api, { meta }) {
  yield call(deleteJob, api, meta)
}

function* watchGetFiltersJobsRequest(api, { meta }) {
  yield call(getFiltersJobs, api, meta)
}

function* watchJobUpdateRequest(api, { payload, meta }) {
  yield call(updateJob, api, payload, meta)
}


export default function* ({ api }) {
  yield takeLatest(actions.GET_JOBS_REQUEST, watchGetJobsRequest, api)
  yield takeLatest(actions.GET_JOB_REQUEST, watchGetJobRequest, api)
  yield takeLatest(actions.CREATE_JOB_REQUEST, watchCreateJobRequest, api)
  yield takeLatest(actions.DELETE_JOB_REQUEST, watchJobDeleteRequest, api)
  yield takeLatest(actions.GET_FILTERS_JOBS_REQUEST, watchGetFiltersJobsRequest, api)
  yield takeLatest(actions.JOB_UPDATE_REQUEST, watchJobUpdateRequest, api)
}