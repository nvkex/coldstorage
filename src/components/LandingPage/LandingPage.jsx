import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './LandingPage.module.css'
import { rootCategories } from '../../data/categoryData'

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
                                <div className="col-lg-4" key={catgry.title}>
                                    <div className={classes.card}>
                                        <a href={catgry.route}>
                                            <img src={`${process.env.PUBLIC_URL}${catgry.imgLink}`} alt="category_img" />
                                        </a>
                                        <div className={classes.details}>
                                            <h5 className="text-center">
                                                <a href={catgry.route}>{catgry.title}</a>
                                            </h5>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
