import React, { Component } from 'react'
import classes from './Navbar.module.css'
import { navlist } from '../../data/navbarNavList.js'
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            active: null
        }
    }

    componentDidMount() {

        // Get active navbar tag from url
        var pathTree = this.props.location.pathname.split('/')
        var path = "/" + pathTree[1] + "/" + pathTree[2]
        if (this.state.active == null || this.state.active !== path) {
            this.setState({ active: path })
        }
    }

    render() {

        return (
            <div className={`${classes.navbar} shadow-sm`}>
                <a className={classes.home}
                    href="/">
                    Cold Storage
                </a>
                {
                    navlist.map(nav => (
                        <a
                            className={nav.route === this.state.active ? classes.active : null}
                            key={nav.title}
                            href={nav.route}>
                            {nav.title}
                        </a>
                    ))
                }
                <a className={classes.account}
                    href="/user/signup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    &nbsp;
                    Signup
                </a>
                <a className={classes.account}
                    href="/user/login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    &nbsp;
                    Login
                </a>
                <a className={classes.account}
                    href="/user">

                </a>


            </div>
        )
    }
}

export default withRouter(Navbar);
