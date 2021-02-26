import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

class UserSignup extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form className="my-4 rounded p-4 shadow" style={{ height: 'auto', width: '440px', margin: 'auto', backgroundColor: 'white' }}>
            <h4 className="text-center">SIGNUP</h4>
            <p className="text-muted text-center">
              <small>Get your virtual key and access free books, movies, audio, images, software, and more!</small>
            </p>
            <div className="form-group my-2">
              <label htmlFor="exampleInputEmail1"><b>Email</b></label>
              <input type="text" className="form-control" id="email" aria-describedby="userHelp" placeholder="Enter Email" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1"><b>Username</b></label>
              <input type="text" className="form-control" id="user" aria-describedby="userHelp" placeholder="Choose a username" />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="exampleInputPassword1"><b>Password</b></label>
              <input type="password" className="form-control" id="pass" placeholder="Password" />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="exampleInputPassword1"><b>Confirm</b></label>
              <input type="password" className="form-control" id="cnfPass" placeholder="Confirm Password" />
            </div>
            <div className="text-center mt-2">
              <button type="submit" className={classes.Btn} onClick={(e) => this.signup(e)}>Signup</button>
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
              <Link to="/user/login" className={classes.Btn}>Login</Link>
            </div>
          </form>


        </div>
      </div>
    )
  }
}

export default UserSignup
