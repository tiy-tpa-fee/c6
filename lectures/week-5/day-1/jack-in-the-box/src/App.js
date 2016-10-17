import React, { Component } from 'react'
import './App.css'
import george1 from './images/george-1.jpg'
import george2 from './images/george-2.jpg'

class App extends Component {

  constructor () {
    super()
    this.state = {
      closed: true
    }
  }

  _clickHandler = () => {
    if (this.state.closed) {
      // Randomly open, 20% chance
      const shouldStayClosed = Math.random() > 0.2
      this.setState({
        closed: shouldStayClosed
      })
    } else {
      // Close it
      this.setState({
        closed: true
      })
    }
  }

  render () {
    let boxImage
    if (this.state.closed) {
      boxImage = george1
    } else {
      boxImage = george2
    }

    return <div className='App'>
      <div className='box'>
        <img src={boxImage} alt='' onClick={this._clickHandler} />
      </div>
    </div>
  }
}

export default App
