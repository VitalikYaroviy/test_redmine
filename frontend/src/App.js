
import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
// import ReduxToastr from 'react-redux-toastr'

import { Session } from './services'

function App() {
  return (
    <Provider store={store}>
      <Session />
    </Provider>
  )
}

export default App

