
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { LogInContainer } from '../containers';



const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route component={ LogInContainer } exact path='/' />
      </Switch>
    </Router>
  )
}

export default PublicRoutes