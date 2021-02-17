import React, { Component } from 'react'
import classes from './CategoryView.module.css'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants/URLs'

class CategoryView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            asc: false,
            categoryItems: null
        }
    }

    componentDidMount() {

        // Get category from url
        var pathTree = this.props.location.pathname.split('/')
        var c = pathTree[2]
        var URL = BACKEND_BASE_URL

        if (c === 'all')
            URL += "all"
        else
            URL += `c/${c}`

        if (this.state.categoryItems == null) {
            axios.get(URL)
                .then(res => {
                    if (!res.data.success)
                        window.location.href = '/404'
                    else {
                        const data = res.data.data.sort((a, b) => b.date.slice(0, 10).localeCompare(a.date.slice(0, 10)))
                        this.setState({ categoryItems: data })
                    }
                })
                .catch(err => {
                    window.location.href = '/404'
                })
        }
    }

    sortBy(key) {
        var data;
        if (this.state.asc) {
            data = this.state.categoryItems.sort((a, b) => {
                try {
                    return b[key].localeCompare(a[key])
                }
                catch (e) {
                    return b[key] - a[key]
                }
            })
        }
        else {
            data = this.state.categoryItems.sort((a, b) => {
                try {
                    return a[key].localeCompare(b[key])
                }
                catch (e) {
                    return a[key] - b[key]
                }
            })
        }
        this.setState({ asc: !this.state.asc, categoryItems: data })
    }

    render() {

        return (
            <div className={classes.page}>
                <div className="table-responsive">
                    <table className={`table table-bordered table-hover table-striped ${classes.contentList}`}>
                        <thead>
                            <tr>
                                <th className={`${classes.hdr} text-center`} style={{ width: '100px' }}>Category</th>
                                <th className={`${classes.hdr}`} style={{ width: 'auto' }}>
                                    Title&nbsp;
                                    <svg onClick={() => this.sortBy("title")} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '100px' }}>
                                    Size &nbsp;
                                    <svg onClick={() => this.sortBy("size")} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '120px' }}>
                                    Date&nbsp;
                                    <svg onClick={() => this.sortBy("date")} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </th>
                                <th className={`${classes.hdr} text-center`} style={{ width: '80px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>&nbsp;
                                    <svg onClick={() => this.sortBy("downloads")} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
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
                                            <td className={`${classes.tableDesc}  text-center`}>
                                                {item.size}GB
                                            </td>
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
