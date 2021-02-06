import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CategoryView from '../components/CategoryView/CategoryView'

class LayoutOne extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="container">
            <CategoryView />
          </div>
      </div>
    )
  }
}

export default LayoutOne
