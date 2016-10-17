import React, { Component } from 'react'
// import logo from './logo.svg';
import Board from './Board'
import Message from './Message'

import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      player: 1,
      positions: Array(9).fill(0)
    }
  }

  play = (space) => {
    if (this.state.positions[space] === 0) {
      const positions = this.state.positions
      positions[space] = this.state.player
      this.setState({
        positions: positions,
        player: this.state.player === 1 ? 2 : 1
      })
    }
  }

  render () {
    return <div className="App">
      <h1>Tic Tac Toe!</h1>
      <Board positions={this.state.positions} onPlay={this.play} />
      <Message text={`It's ${this.state.player === 1 ? 'O' : 'X'}'s Turn`} />
    </div>
  }
}

export default App
