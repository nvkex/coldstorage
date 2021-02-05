import React, { Component } from 'react'
import classes from './Navbar.module.css'
import { navlist } from '../../data/navbar_nav_list.js'

class Navbar extends Component {

    render() {
        return (
            <div className={`${classes.navbar} shadow-sm`}>
                {
                    navlist.map(nav => (
                        <a className={nav.title === 'Home'?classes.active: null} key={nav.title} href={nav.route}>{nav.title}</a>
                    ))
                }
            </div>
        )
    }
}

export default Navbar
