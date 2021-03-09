import React from 'react'

import './styles.scss'

export const LogIn = ({ handleChange, submit }) => {
  return (
    <div className='logIn-block'>
      <div className='logIn'>
        <input onChange={ e => handleChange('email', e.target.value) } />
        <input onChange={ e => handleChange('password', e.target.value) } type="password" />
        <button onClick={ () => submit() }>
          Sign in
        </button>
      </div>
    </div>
  )
}
