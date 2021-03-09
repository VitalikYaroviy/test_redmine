import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { DeveloperContainer } from '../containers'

const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={ DeveloperContainer } exact path='/' />
      </Switch>
    </Router>
  )
}

export default PrivateRoutes