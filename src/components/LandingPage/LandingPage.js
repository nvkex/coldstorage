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
                    <h3 className="display-4 mb-0">Cold Storage</h3>
                    <small className="text-muted">Non-profit library for public documents, web pages, videos, audios, music, books and more.</small>
                </div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-center my-4">
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
