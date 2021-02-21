import axios from 'axios';
import React, { Component } from 'react'
import { BACKEND_BASE_URL } from '../../constants/URLs';
import classes from './NewEntryForm.module.css'

class NewEntryForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pass: '',
      title: '',
      category: '',
      size: '',
      language: '',
      hosts: '',
      quality: '',
      ref: '',
      summary: '',
      mediaInfo: {
        general: '',
        video: '',
        audio: '',
        subs: ''
      },
      screenshots: [],
      downloadLinks: []
    }
  }

  handleMultiLinks(val, index, type) {
    var arr;
    if (type === 'sc')
      arr = this.state.screenshots
    else {
      arr = this.state.downloadLinks
    }
    arr[index] = val
    if (type === 'sc')
      this.setState({ screenshots: arr })
    else {
      this.setState({ downloadLinks: arr })
    }
  }

  uploadObject(e) {
    e.preventDefault();
    var fields = []
    Object.keys(this.state).forEach(k => {
      if (this.state[k] === '' || this.state[k].length === 0)
        fields.push(k)
    })

    if (fields.length === 0) {
      var body = { ...this.state }
      var sc = [];
      var dl = [];
      this.state.screenshots.forEach(s => {
        sc.push({ link: s.split('|')[0], image: s.split('|')[1] })
      })
      this.state.downloadLinks.forEach(d => {
        dl.push({ host: d.split('|')[0], link: d.split('|')[1] })
      })
      body.screenshots = sc;
      body.downloadLinks = dl;

      axios.post(`${BACKEND_BASE_URL}upload`, body)
      .then(res => {
        if(res.data.success){
          window.location.href = `/id?q=${res.data.data.slug}`
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className={classes.container}>
            <div className={classes.header}>New Entry Form</div>
            <form className="my-4" style={{ padding: '20px 40px', margin: 'auto' }}>

              {/* General Information */}
              <div className="form-group  mb-2">
                <label htmlFor="pass">Password</label>
                <input type="password" className="form-control" id="pass" placeholder="Security Password" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="userHelp" placeholder="Enter Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="category">Category</label>
                <input type="text" className="form-control" id="category" aria-describedby="userHelp" placeholder="Movie, TV or Anime" value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="size">Size</label>
                <span className={classes.inlineInput}>
                  <input style={{ width: '85%' }} type="text" className="form-control" id="size" aria-describedby="userHelp" placeholder="File/Folder Size" value={this.state.size} onChange={(e) => this.setState({ size: e.target.value })} />
                  <span className="text-muted" style={{ margin: '0 8px' }}>GB</span>
                </span>

              </div>
              <div className="form-group mb-2">
                <label htmlFor="language">Language</label>
                <input type="text" className="form-control" id="language" aria-describedby="userHelp" placeholder="Seperate them with spaces" value={this.state.language} onChange={(e) => this.setState({ language: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="hosts">Hosts</label>
                <input type="text" className="form-control" id="hosts" aria-describedby="userHelp" placeholder="Seperate them with spaces" value={this.state.hosts} onChange={(e) => this.setState({ hosts: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="vq">Video Quality</label>
                <input type="text" className="form-control" id="vq" aria-describedby="userHelp" placeholder="2160p, 1080p, 720p or 480p" value={this.state.quality} onChange={(e) => this.setState({ quality: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ref">Reference Link</label>
                <input type="text" className="form-control" id="ref" aria-describedby="userHelp" placeholder="IMDB or MAL link" value={this.state.ref} onChange={(e) => this.setState({ ref: e.target.value })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="summary">Summary</label>
                <textarea rows="4" className="form-control" id="summary" aria-describedby="userHelp" placeholder="Summary of story." value={this.state.summary} onChange={(e) => this.setState({ summary: e.target.value })} />
              </div>

              {/* MEDIA INFO */}
              <div className="my-4">
                <h3>MediaInfo</h3>
                <i className="text-muted"><small>Use pipline '|' to seperate each line.</small></i>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mIGeneral">General</label>
                <textarea rows="2" className="form-control" id="mIGeneral" value={this.state.mediaInfo.general} onChange={(e) => this.setState({ mediaInfo: { ...this.state.mediaInfo, general: e.target.value } })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mIVideo">Video</label>
                <textarea rows="2" className="form-control" id="mIVideo" value={this.state.mediaInfo.video} onChange={(e) => this.setState({ mediaInfo: { ...this.state.mediaInfo, video: e.target.value } })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mIAudio">Audio</label>
                <textarea rows="2" className="form-control" id="mIAudio" value={this.state.mediaInfo.audio} onChange={(e) => this.setState({ mediaInfo: { ...this.state.mediaInfo, audio: e.target.value } })} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mISubs">Subtitles</label>
                <textarea rows="2" className="form-control" id="mISubs" value={this.state.mediaInfo.subs} onChange={(e) => this.setState({ mediaInfo: { ...this.state.mediaInfo, subs: e.target.value } })} />
              </div>

              {/* Screenshots */}
              <div className="my-4">
                <h3>Screenshots</h3>
                <i className="text-muted"><small>Use pipeline '|' to seperate external link and image link</small></i>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ss1">Screenshot 1</label>
                <input
                  type="text" className="form-control" id="ss1"
                  value={this.state.screenshots[0] ? this.state.screenshots[0] : ''}
                  onChange={(e) => this.handleMultiLinks(e.target.value, 0, 'sc')} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ss2">Screenshot 2</label>
                <input
                  type="text" className="form-control" id="ss2"
                  value={this.state.screenshots[1] ? this.state.screenshots[1] : ''}
                  onChange={(e) => this.handleMultiLinks(e.target.value, 1, 'sc')} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ss3">Screenshot 3</label>
                <input
                  type="text" className="form-control" id="ss3"
                  value={this.state.screenshots[2] ? this.state.screenshots[2] : ''}
                  onChange={(e) => this.handleMultiLinks(e.target.value, 2, 'sc')} />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ss4">Screenshot 4</label>
                <input
                  type="text" className="form-control" id="ss4"
                  value={this.state.screenshots[3] ? this.state.screenshots[3] : ''}
                  onChange={(e) => this.handleMultiLinks(e.target.value, 3, 'sc')} />
              </div>

              {/* Download Links */}
              <div className="my-4">
                <h3>Download Links</h3>
                <i className="text-muted"><small>Use pipeline '|' to seperate Host name and Download link</small></i>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="dl1">Download Link</label>
                <input
                  type="text" className="form-control" id="dl1"
                  value={this.state.downloadLinks.length > 0 ? this.state.downloadLinks[0] : ''}
                  onChange={(e) => this.handleMultiLinks(e.target.value, 0, 'dl')}
                />
              </div>

              <div className="text-center mt-2">
                <button type="submit" className={classes.Btn} onClick={(e) => this.uploadObject(e)}>Upload</button>
              </div>

            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default NewEntryForm
