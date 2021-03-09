import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import { LogIn, Users } from '../components'
import { history } from '../services'

const PublicRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route component={ LogIn } path='/' />

      <Redirect exact to='/' />
    </Switch>
  </Router>
)

export default PublicRoutes
