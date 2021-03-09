import * as constant from './actions'

const initialResourceState = {
  data: {},
  users: [],
  loading: false,
  errors: {}
}

export default (state = initialResourceState, { type, payload }) => {
  switch (type) {

  case constant.SESSION_CREATE_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.SESSION_CREATE_SUCCESS:
    return {
      ...state,
      loading: false,
      data: payload.data
    }
  case constant.SESSION_CREATE_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.SESSION_SHOW_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.SESSION_SHOW_SUCCESS:
    return {
      ...state,
      loading: false,
      data: payload.data
    }
  case constant.SESSION_SHOW_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.SESSION_DELETE_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.SESSION_DELETE_SUCCESS:
    return {
      ...state,
      loading: false,
      data: {}
    }
  case constant.SESSION_DELETE_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.GET_USERS_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.GET_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      users: payload.users
    }
  case constant.GET_USERS_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  default:
    return state
  }
}