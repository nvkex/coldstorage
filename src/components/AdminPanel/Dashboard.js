import axios from 'axios'
import React, { Component } from 'react'
import { BACKEND_BASE_URL } from '../../constants/URLs'
import classes from './Dashboard.module.css'

class AdminDashboard extends Component {

    state = {
        verified: null
    }

    componentDidMount(){
        if (this.state.verified == null) {
            const adminInfo = JSON.parse(localStorage.getItem("animayzingAdminInfo"))
            if (adminInfo && adminInfo.token) {
                axios.post(`${BACKEND_BASE_URL}admin/verify`, { token: adminInfo.token })
                    .then(res => {
                        if (!res.data.success) {
                            window.location.href = '/'
                        }
                        else {
                            console.log('Reached')
                            this.setState({verified : true})
                        }
                    })
                    .catch(err => {
                        window.location.href = '/'
                    })
            }
            else {
                window.location.href = '/'
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.verified ? (
                        <div className={`container`}>
                            <div className={classes.dashboard}>
                                <div className={classes.header}>Admin Panel</div>
                                <div className={classes.contentCntnr}>
                                    <a href="/admin/new-entry" className={classes.Btn}>New Entry</a>
                                    <a href="/admin/all-entries" className={classes.Btn}>All Entries</a>
                                </div>

                            </div>
                        </div>
                    ) :
                        null
                }

            </div>
        )
    }
}

export default AdminDashboard
