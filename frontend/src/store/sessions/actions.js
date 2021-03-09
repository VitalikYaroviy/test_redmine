export const SESSION_CREATE_REQUEST = 'CREATE_SESSION_REQUEST'
export const SESSION_CREATE_SUCCESS = 'CREATE_SESSION_SUCCEEDED'
export const SESSION_CREATE_FAILURE = 'CREATE_SESSION_FAILED'

export const sessionCreateRequest = (resource, data) => ({
  type: SESSION_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    thunk: `${resource}Create`
  }
})

export const sessionCreateSuccess = (resource, detail, request, thunk) => ({
  type: SESSION_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const sessionCreateFailure = (resource, error, request, thunk) => ({
  type: SESSION_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const SESSION_SHOW_REQUEST = 'SHOW_USER_REQUEST'
export const SESSION_SHOW_SUCCESS = 'SHOW_USER_SUCCEEDED'
export const SESSION_SHOW_FAILURE = 'SHOW_USER_FAILED'

export const sessionShowRequest = (resource) => ({
  type: SESSION_SHOW_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Show`
  }
})

export const sessionShowSuccess = (resource, detail, request, thunk) => ({
  type: SESSION_SHOW_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const sessionShowFailure = (resource, error, request, thunk) => ({
  type: SESSION_SHOW_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const SESSION_DELETE_REQUEST = 'DELETE_SESSION_REQUEST'
export const SESSION_DELETE_SUCCESS = 'DELETE_SESSION_SUCCEEDED'
export const SESSION_DELETE_FAILURE = 'DELETE_SESSION_FAILED'

export const sessionDeleteRequest = (resource) => ({
  type: SESSION_DELETE_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Delete`
  }
})

export const sessionDeleteSuccess = (resource, detail, request, thunk) => ({
  type: SESSION_DELETE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const sessionDeleteFailure = (resource, error, request, thunk) => ({
  type: SESSION_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCEEDED'
export const GET_USERS_FAILURE = 'GET_USERS_FAILED'

export const getUsersRequest = (resource) => ({
  type: GET_USERS_REQUEST,
  meta: {
    resource,
    thunk: `${resource}Index`
  }
})

export const getUsersSuccess = (resource, detail, request, thunk) => ({
  type: GET_USERS_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource
  }
})

export const getUsersFailure = (resource, error, request, thunk) => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    thunk
  }
})