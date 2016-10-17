import React, { Component } from 'react'
import Word from './Word'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'REACT',
      used: [
        'C', 'E', 'L', 'T'
      ]
    }
  }

  render() {
    return <div className='App'>
      <h1>Hangman!</h1>
      <Word solution={this.state.solution} used={this.state.used} />
    </div>
  }
}

export default App
