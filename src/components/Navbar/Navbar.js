import React, { Component } from 'react'
import classes from './Navbar.module.css'
import { navlist } from '../../data/navbarNavList.js'
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor(){
        super()
        this.state = {
            active: null
        }
    }

    componentDidMount(){

        // Get active navbar tag from url
        var pathTree = this.props.location.pathname.split('/')
        var path = "/"+pathTree[1]+"/"+pathTree[2]
        if(this.state.active == null || this.state.active !== path){
            this.setState({active: path})
        }
    }

    render() {

        return (
            <div className={`${classes.navbar} shadow-sm`}>
                {
                    navlist.map(nav => (
                        <Link 
                            className={nav.route === this.state.active ?classes.active: null}
                            key={nav.title} 
                            to={ nav.route}
                            onClick={() => this.setState({active: nav.route})}>
                                {nav.title}
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(Navbar);
