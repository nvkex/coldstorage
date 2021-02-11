import React, { Component } from 'react'
import classes from './CategoryView.module.css'

class CategoryView extends Component {
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
                                <th className={`${classes.hdr} text-center`} style={{ width: '140px' }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={`${classes.tableDesc} text-center`}>Sub</td>
                                <td className={`${classes.tableDesc} `}>
                                    <a href="/id?q=123">Attack on Titan (Season 1)</a>
                                </td>
                                <td className={`${classes.tableDesc}  text-center`}>1.1GB</td>
                                <td className={`${classes.tableDesc}  text-center`}>2020-02-12</td>
                            </tr>
                            <tr>
                                <td className={`${classes.tableDesc} text-center`}>Sub</td>
                                <td className={`${classes.tableDesc} `}>
                                    <a href="#">Attack on Titan (Season 1)</a>
                                </td>
                                <td className={`${classes.tableDesc}  text-center`}>1.1GB</td>
                                <td className={`${classes.tableDesc}  text-center`}>2020-02-12</td>
                            </tr>
                            <tr>
                                <td className={`${classes.tableDesc}  text-center`}>Sub</td>
                                <td className={`${classes.tableDesc} `}>
                                    <a href="#">Attack on Titan (Season 1)</a>
                                </td>
                                <td className={`${classes.tableDesc}  text-center`}>1.1GB</td>
                                <td className={`${classes.tableDesc}  text-center`}>2020-02-12</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default CategoryView
