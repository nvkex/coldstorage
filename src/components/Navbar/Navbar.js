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
                <a  className={classes.home}
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
            </div>
        )
    }
}

export default withRouter(Navbar);
