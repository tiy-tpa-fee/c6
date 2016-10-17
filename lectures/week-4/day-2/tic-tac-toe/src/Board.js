import React, { Component } from 'react'

class Board extends Component {

  render () {
    // Because we want to pass positions and onPlay to the cell,
    // by the same name, was use the "spread operator" (...) to copy
    // the Board's props to each cell.
    return <table>
      <tbody>
        <tr>
          <Cell space={0} positions={this.props.positions} onPlay={this.props.onPlay} />
          <Cell space={1} {...this.props} />
          <Cell space={2} {...this.props} />
        </tr>
        <tr>
          <Cell space={3} {...this.props} />
          <Cell space={4} {...this.props} />
          <Cell space={5} {...this.props} />
        </tr>
        <tr>
          <Cell space={6} {...this.props} />
          <Cell space={7} {...this.props} />
          <Cell space={8} {...this.props} />
        </tr>
      </tbody>
    </table>
  }
}

class Cell extends Component {

  render () {
    const cx = { 0: '', 1: 'O', 2: 'X' }
    // this.props.positions is passed in as a prop from Board
    // where it's passed down from the App, as is handleClick
    const play = this.props.positions[this.props.space]
    return <td
      className={cx[play]}
      onClick={() => this.props.onPlay(this.props.space)} />
  }
}

export default Board
