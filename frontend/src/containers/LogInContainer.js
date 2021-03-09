import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { LogIn } from '../components'
import { sessionCreateRequest } from '../store/sessions/actions'

const initialState = {
  email: '',
  password: ''
}

export const LogInContainer = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState(initialState)

  const handleChange = (key, text) => {
    setValue({...value, [key]: text})
  }

  const submit = () => {
    dispatch(sessionCreateRequest('authentications', value))
  }

  return (
    <LogIn
      handleChange={ handleChange }
      submit={ submit }
    />
  )
}
