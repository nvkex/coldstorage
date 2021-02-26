import classes from './Auth.module.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserLogin extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form className="my-4 rounded p-4 shadow" style={{ height: 'auto', width: '360px', margin: 'auto', backgroundColor: 'white' }}>
            <h4 className="text-center">LOGIN</h4>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1"><b>Username</b></label>
              <input type="text" className="form-control" id="user" aria-describedby="userHelp" placeholder="Enter Username" />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="exampleInputPassword1"><b>Password</b></label>
              <input type="password" className="form-control" id="pass" placeholder="Password" />
            </div>
            <div className="text-center mt-2">
              <button type="submit" className={classes.Btn} onClick={(e) => this.login(e)}>Login</button>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-5">
                <hr />
              </div>
              <div className="col-2">
                OR
                  </div>
              <div className="col-5">
                <hr />
              </div>
            </div>
            <div className="text-center mt-4 mb-2">
              <Link to="/user/signup" className={classes.Btn}>Signup</Link>
            </div>
          </form>


        </div>
      </div>
    )
  }
}

export default UserLogin
