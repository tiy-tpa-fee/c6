import React, { Component } from 'react'
import './Letter.css'

class Letter extends Component {
  // There's actually a cleaner way to work with class names like this
  // that we will cover later...
  render() {
    // Make an array for the class names
    const cx = ['Letter']
    // if it's been revealed, add that class name
    if (this.props.revealed) {
      cx.push('revealed')
    }
    // join the class names together with spaces
    return <span className={cx.join(' ')}>{this.props.value}</span>
  }
}

export default Letter
