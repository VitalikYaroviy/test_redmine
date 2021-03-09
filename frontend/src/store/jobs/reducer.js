import * as constant from './actions'

const initialResourceState = {
  jobsData: [],
  loading: false,
  job: {},
  errors: {}
}

export default (state = initialResourceState, { type, payload }) => {
  switch (type) {

  case constant.GET_JOBS_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.GET_JOBS_SUCCESS:
    return {
      ...state,
      loading: false,
      jobsData: payload.job
    }
  case constant.GET_JOBS_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.GET_JOB_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.GET_JOB_SUCCESS:
    return {
      ...state,
      loading: false,
      job: payload.job
    }
  case constant.GET_JOB_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.CREATE_JOB_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.CREATE_JOB_SUCCESS:
    return {
      ...state,
      loading: false,
      jobsData: [...state.jobsData, payload.job] 
    }
  case constant.CREATE_JOB_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.DELETE_JOB_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.DELETE_JOB_SUCCESS:
    return {
      ...state,
      loading: false,
      jobsData: state.jobsData.filter(i => i.id !== payload.id), 
    }
  case constant.DELETE_JOB_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.GET_FILTERS_JOBS_REQUEST:
    return {
      ...state,
      loading: true
    }
  case constant.GET_FILTERS_JOBS_SUCCESS:
    return {
      ...state,
      loading: false,
      jobsData: payload.job
    }
  case constant.GET_FILTERS_JOBS_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  case constant.JOB_UPDATE_REQUEST:
      return {
        ...state,
        loading: true
      }
  case constant.JOB_UPDATE_SUCCESS:
    return {
      ...state,
      loading: false,
      jobsData: state.jobsData.map(item => {
        if (item.id === payload.job.id) {
          item.name = payload.job.name
          item.category = payload.job.category
          item.hours = payload.job.hours
          return item
        }
        return item
      })
    }
  case constant.JOB_UPDATE_FAILURE:
    return {
      ...state,
      loading: false,
      errors: payload
    }

  default:
    return state
  }
}