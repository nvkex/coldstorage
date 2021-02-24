import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import NewEntryForm from './NewEntryForm'
import AdminLogin from './AdminLogin';
import AdminDashboard from './Dashboard';


class AdminPanel extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/admin/login" component = {AdminLogin} />
            <Route exact path="/admin/new-entry" component = {NewEntryForm} />
            <Route exact path="/admin/all-entries" component = {NewEntryForm} />
            <Route exact path="/admin" component = {AdminDashboard} />
        </Switch>
      </div>
    )
  }
}

export default AdminPanel
