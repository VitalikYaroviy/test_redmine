export const GET_JOBS_REQUEST = 'GET_JOBS_REQUEST'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCEEDED'
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILED'

export const getJobsRequest = (resource) => ({
  type: GET_JOBS_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Index`
  }
})

export const getJobsSuccess = (resource, detail, request, thunk) => ({
  type: GET_JOBS_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const getJobsFailure = (resource, error, request, thunk) => ({
  type: GET_JOBS_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const GET_JOB_REQUEST = 'GET_JOB_REQUEST'
export const GET_JOB_SUCCESS = 'GET_JOB_SUCCEEDED'
export const GET_JOB_FAILURE = 'GET_JOB_FAILED'

export const getJobRequest = (resource) => ({
  type: GET_JOB_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Show`
  }
})

export const getJobSuccess = (resource, detail, request, thunk) => ({
  type: GET_JOB_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const getJobFailure = (resource, error, request, thunk) => ({
  type: GET_JOB_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const CREATE_JOB_REQUEST = 'CREATE_JOB_REQUEST'
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS'
export const CREATE_JOB_FAILURE = 'CREATE_JOB_FAILURE'

export const jobCreateRequest = (resource, data) => ({
  type: CREATE_JOB_REQUEST,
  payload: { data },
  meta: {
    resource,
    thunk: `${resource}Create`
  }
})

export const jobCreateSuccess = (resource, detail, request, thunk) => ({
  type: CREATE_JOB_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const jobCreateFailure = (resource, error, request, thunk) => ({
  type: CREATE_JOB_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST'
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCEEDED'
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILED'

export const jobDeleteRequest = (resource) => ({
  type: DELETE_JOB_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Delete`
  }
})

export const jobDeleteSuccess = (resource, detail, request, thunk) => ({
  type: DELETE_JOB_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const jobDeleteFailure = (resource, error, request, thunk) => ({
  type: DELETE_JOB_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const GET_FILTERS_JOBS_REQUEST = 'GET_FILTERS_JOBS_REQUEST'
export const GET_FILTERS_JOBS_SUCCESS = 'GET_FILTERS_JOBS_SUCCEEDED'
export const GET_FILTERS_JOBS_FAILURE = 'GET_FILTERS_JOBS_FAILED'

export const getFiltersJobsRequest = (resource) => ({
  type: GET_FILTERS_JOBS_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Index`
  }
})

export const getFiltersJobsSuccess = (resource, detail, request, thunk) => ({
  type: GET_FILTERS_JOBS_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const getFiltersJobsFailure = (resource, error, request, thunk) => ({
  type: GET_FILTERS_JOBS_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const JOB_UPDATE_REQUEST = 'UPDATE_JOB_REQUEST'
export const JOB_UPDATE_SUCCESS = 'UPDATE_JOB_SUCCEEDED'
export const JOB_UPDATE_FAILURE = 'UPDATE_JOB_FAILED'

export const jobUpdateRequest = (resource, data, currentPage) => ({
  type: JOB_UPDATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    currentPage,
    thunk: `${resource}Update`
  }
})

export const jobUpdateSuccess = (resource, detail, request, thunk) => ({
  type: JOB_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const jobUpdateFailure = (resource, error, request, thunk) => ({
  type: JOB_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})