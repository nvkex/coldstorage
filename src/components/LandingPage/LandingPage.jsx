import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './LandingPage.module.css'

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
                        <div className="col-lg-4">
                            <div className={classes.card}>
                                <a href="/anime">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/category-1.jpg`} alt="category_img" />
                                </a>
                                <div className={classes.details}>
                                    <h5 className="text-center">
                                        <a href="/anime">Anime</a>
                                    </h5>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={classes.card}>
                                <a href = "/movies">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/category-2.jpg`} alt="category_img"/>
                                </a>
                                <div className={classes.details}>
                                    <h5 className="text-center">
                                        <a href="/movies">Movies</a>
                                    </h5>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={classes.card}>
                                <a href = "/torrents">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/category-3.jpg`} alt="category_img"/>
                                </a>
                                <div className={classes.details}>
                                    <h5 className="text-center">
                                        <a href="/torrents">Torrents</a>
                                    </h5>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={classes.card}>
                                <a href = "/tv">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/category-4.webp`} alt="category_img"/>
                                </a>
                                <div className={classes.details}>
                                    <h5 className="text-center">
                                        <a href="/tv">TV Shows</a>
                                    </h5>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
