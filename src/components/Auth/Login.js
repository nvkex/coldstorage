import classes from './Auth.module.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/AuthActions';

class UserLogin extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }  

  login= (e) => {
    e.preventDefault();
    
    // Validation
    if(this.state.username === '' || this.state.password === ''){
      console.log("Error")
    }
    else{
      this.props.login({username:this.state.username , password:this.state.password})
    }
  }

  componentDidMount(){
    if(this.props.user){
      window.location.href = '/'
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <form className="my-4 rounded p-4 shadow" style={{ height: 'auto', width: '360px', margin: 'auto', backgroundColor: 'white' }}>
            <h4 className="text-center">LOGIN</h4>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1"><b>Username</b></label>
              <input
                type="text"
                className="form-control"
                id="user"
                aria-describedby="userHelp"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })} />
            </div>
            <div className="form-group  mb-2">
              <label htmlFor="exampleInputPassword1"><b>Password</b></label>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })} />
            </div>
            <div className="text-center mt-2">
              <button type="submit" className={classes.Btn} onClick={this.login}>Login</button>
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

const mapStateToProps = (state) => {
  return {
      user: state.userInfo
  }
}

const mapDispatchToProps = {
  login: loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
