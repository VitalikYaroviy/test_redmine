import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'lodash.isempty'

import PublicRoutes from '../routes/PublicRoutes'
import PrivateRoutes from '../routes/PrivateRoutes'
import { sessionShowRequest } from '../store/sessions/actions'

export const Session = () => {
  const dispatch = useDispatch()

  const { data } = useSelector(state => state.sessions)

  useEffect(() => {
    dispatch(sessionShowRequest('authentications'))
  }, [])

  return !isEmpty(data) ? <PrivateRoutes /> : <PublicRoutes/>
}
