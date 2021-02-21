import React, { Component } from 'react'
import classes from './ItemView.module.css'
import axios from 'axios'
import Cryptr from 'cryptr';
import { Redirect } from 'react-router';
import { BACKEND_BASE_URL } from '../../../constants/URLs'

class ItemView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            item: null
        }
    }

    componentDidMount() {

        // Get category from url
        var search = this.props.location.search.slice(1)
        var q = search.split('=')[1]
        if (this.state.item == null) {
            axios.get(`${BACKEND_BASE_URL}item/${q}`)
                .then(res => {
                    this.setState({ item: res.data.data[0], loading: false })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    updateDownload(slug) {
        const cryptr = new Cryptr('nvkex');
        const body = {
            itemId: slug,
            downloads: true,
            views: false,
            token: cryptr.encrypt(new Date().getTime().toString())
        }
        axios.post(`${BACKEND_BASE_URL}update`, body)
            .then(res => {
            })
            .catch(err => {
            })
    }

    render() {
        return (
            <div>
                <div className={classes.itemView}>
                    {
                        this.state.item ? (
                            <div>
                                <div className={classes.headingPanel}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                                        <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                                    </svg>
                                    <span className={classes.itemTitle}>{this.state.item.title}</span>
                                </div>

                                <div className={classes.itemInfoContainer}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table-responsive">
                                                <table className={`table table-condensed table-striped table-hover ${classes.ItemInfoTable}`}>
                                                    <thead>
                                                        <tr>
                                                            <th>Item Info</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Uploader</th>
                                                            <td className={classes.infoDetail}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                                </svg>
                                                                <span className={classes.iconText}>
                                                                    {this.state.item.author}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Language</th>
                                                            <td className={classes.infoDetail}>
                                                                <span className={classes.tagList}>
                                                                    {
                                                                        this.state.item.language.split(" ").map(lan => (
                                                                            <span key={lan} className={classes.tag}>{lan}</span>
                                                                        ))
                                                                    }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Category</th>
                                                            <td className={classes.infoDetail} style={{ textTransform: 'capitalize' }}>{this.state.item.category}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Hosts</th>
                                                            <td className={classes.infoDetail}>
                                                                <span className={classes.tagList}>
                                                                    {
                                                                        this.state.item.hosts.split(" ").map(host => (
                                                                            <span key={host} className={classes.tag}>{host}</span>
                                                                        ))
                                                                    }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="table-responsive">
                                                <table className={`table table-condensed table-striped table-hover ${classes.ItemInfoTable}`}>
                                                    <thead>
                                                        <tr>
                                                            <th>Scrape Info</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Date</th>
                                                            <td className={classes.infoDetail}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                                                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                                </svg>
                                                                <span className={classes.iconText}>
                                                                    {this.state.item.date}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Size</th>
                                                            <td className={classes.infoDetail}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hdd" viewBox="0 0 16 16">
                                                                    <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                                    <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26L1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                                                </svg>
                                                                <span className={classes.iconText}>
                                                                    {this.state.item.size}GB
                                                            </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Downloads</th>
                                                            <td className={classes.infoDetail}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                                </svg>
                                                                <span className={classes.iconText}>
                                                                    {this.state.item.downloads}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={classes.infoHead} style={{ width: '110px' }}>Quality</th>
                                                            <td className={classes.infoDetail}>
                                                                <span className={classes.tagList}>
                                                                    <span className={classes.tag}>{this.state.item.quality}</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.itemDescription}>
                                    <div className={classes.section}>
                                        <h4>Download</h4>
                                        <div className="text-center mt-4">
                                            {
                                                this.state.item.downloadLinks.map((link, i) => (
                                                    <a
                                                        onClick={(e) => this.updateDownload(this.state.item.slug)}
                                                        href={link.link} key={`download-${i}`}
                                                        target="_blank" rel="noreferrer"
                                                        className={`shadow-sm ${classes.downloadBtn}`}>
                                                        {link.host}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={classes.section}>
                                        <h4>About</h4>
                                        <p>
                                            {this.state.item.summary}
                                        </p>
                                        <a href={this.state.item.ref} target="_blank" rel="noreferrer">{this.state.item.ref}</a>
                                    </div>
                                    <div className={classes.section}>
                                        <h4>MediaInfo</h4>
                                        <div className={classes.mediaInfo}>
                                            <div>
                                                <strong>GENERAL</strong>
                                                {this.state.item.mediaInfo.general.split('|').map((mInfo, i) => (
                                                    <div key={`general-${i}`}>{mInfo}</div>
                                                ))}
                                                <br />
                                                <strong>VIDEO</strong>
                                                {this.state.item.mediaInfo.video.split('|').map((mInfo, i) => (
                                                    <div key={`video-${i}`}>{mInfo}</div>
                                                ))}
                                                <br />
                                                <strong>AUDIO</strong>
                                                {this.state.item.mediaInfo.audio.split('|').map((mInfo, i) => (
                                                    <div key={`audio-${i}`}>{mInfo}</div>
                                                ))}
                                                <br />
                                                <strong>SUBTITLE</strong>
                                                {this.state.item.mediaInfo.subs.split('|').map((mInfo, i) => (
                                                    <div key={`subs-${i}`}>{mInfo}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.section}>
                                        <h4>Screenshots</h4>
                                        <div>
                                            {
                                                this.state.item.screenshots.map((image, i) => (
                                                    <a href={image.link} target="_blank" rel="noreferrer" key={`screenshot-${i}`} style={{ padding: '0 2px' }}>
                                                        <img src={image.image} alt={i} border="0" className="img-fluid" />
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ) :
                            null
                    }
                </div>
                {
                    !this.state.loading && !this.state.item ? (
                        <div>
                            <Redirect to="/404" />
                        </div>
                    ) :
                    this.state.loading ?
                        (
                            <div className="spinner-container">
                                <div className="lds-facebook"><div></div><div></div><div></div></div>
                            </div>
                        ) : null
                }
            </div>
        )
    }
}

export default ItemView
