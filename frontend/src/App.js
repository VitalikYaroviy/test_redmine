
import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import ReduxToastr from 'react-redux-toastr'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import { Session } from './services'

function App() {
  return (
    <Provider store={store}>

      <ReduxToastr
        timeOut={ 2000 }
        newestOnTop={ false }
        preventDuplicates
        position='top-right'
        getState={ (state) => state.toastr }
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        closeOnToastrClick
      />
      <Session />
    </Provider>
  )
}

export default App

