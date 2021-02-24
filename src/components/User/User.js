import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import UserLogin from '../Auth/Login';
import UserSignup from '../Auth/Signup';
import UserDashboard from './Dashboard';

class UserRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/user/login" component={UserLogin} />
            <Route exact path="/user/signup" component={UserSignup} />
            <Route exact path="/user/:id" component={UserDashboard} />
            <Route path="/user" component={UserDashboard} />
        </Switch>
      </div>
    )
  }
}

export default UserRoutes
