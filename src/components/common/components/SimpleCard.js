import React, { Component } from 'react'
import classes from './SimpleCard.module.css'

class SimpleCard extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className={classes.card}>
                    <a href={this.props.category.route}>
                        <img src={`${process.env.PUBLIC_URL}${this.props.category.imgLink}`} alt="category_img" />
                    </a>
                    <div className={classes.details}>
                        <h5 className="text-center">
                            <a href={this.props.category.route}>{this.props.category.title}</a>
                        </h5>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleCard
