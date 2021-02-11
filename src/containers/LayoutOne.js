import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'

class LayoutOne extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="container">
            {this.props.children}
          </div>
      </div>
    )
  }
}

export default LayoutOne
