import React, { Component } from 'react'
import classes from './CategoryView.module.css'
import axios from 'axios'

class CategoryView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryItems: null
        }
    }

    componentDidMount() {

        // Get category from url
        var pathTree = this.props.location.pathname.split('/')
        var c = pathTree[2]
        if (this.state.categoryItems == null) {
            axios.get(`http://localhost:3001/c/${c}`)
                .then(res => {
                    this.setState({ categoryItems: res.data.data })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {

        return (
            <div className={classes.page}>
                <div className="table-responsive">
                    <table className={`table table-bordered table-hover table-striped ${classes.contentList}`}>
                        <thead>
                            <tr>
                                <th className={`${classes.hdr} text-center`} style={{ width: '100px' }}>Category</th>
                                <th className={`${classes.hdr}`} style={{ width: 'auto' }}>Title</th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '100px' }}>Size</th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '120px' }}>Date</th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '80px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categoryItems && this.state.categoryItems.length ?
                                    this.state.categoryItems.map(item => (
                                        <tr key={item.slug}>
                                            <td className={`${classes.tableDesc} ${classes.subCat} text-center`}>{item.category}</td>
                                            <td className={`${classes.tableDesc} `}>
                                                <a href={`/id?q=${item.slug}`}>{item.title}</a>
                                            </td>
                                            <td className={`${classes.tableDesc}  text-center`}>{item.size}</td>
                                            <td className={`${classes.tableDesc}  text-center`}>{item.date.slice(0, 10)}</td>
                                            <td className={`${classes.tableDesc}  text-center`}>{item.downloads}</td>
                                        </tr>
                                    ))
                                    : null

                            }
                        </tbody>
                    </table>

                </div>
                {
                    this.state.categoryItems && this.state.categoryItems.length === 0 ? (
                        <h3 className="text-center text-muted my-4">Whoops...Nothings here!</h3>
                    ) :
                        null
                }
            </div>
        )
    }
}

export default CategoryView
