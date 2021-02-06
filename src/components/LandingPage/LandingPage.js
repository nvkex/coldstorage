import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
// import classes from './LandingPage.module.css'
import { rootCategories } from '../../data/categoryData'
import SimpleCard from '../common/components/SimpleCard'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="container text-center">
                    <h3 className="display-4">Animayzing</h3>
                    <small className="text-muted">Google Drive Links and Torrents for 720p, 1080p and 4K Anime, Movies & TV Shows.</small>
                </div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {
                            rootCategories.map(catgry => (
                                <SimpleCard category={catgry} key={catgry.title}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
