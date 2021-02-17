import React, { Component } from 'react'

class AdminLogin extends Component {
    
    login(e){
        e.preventDefault()
        
    }

    render() {
        return (
            <div className="container">
                <form className="my-4 rounded p-4 shadow" style={{width:'320px', margin: 'auto', backgroundColor:'white'}}>
                    <div class="form-group mb-2">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" id="user" aria-describedby="userHelp" placeholder="Enter Username" />
                    </div>
                    <div class="form-group  mb-2">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="pass" placeholder="Password" />
                    </div>
                    <div className="text-center mt-2">
                    <button type="submit" class="btn btn-primary" onClick={(e) => this.login(e)}>Submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default AdminLogin
