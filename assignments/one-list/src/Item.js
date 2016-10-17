import React, { Component } from 'react'

class Item extends Component {

  clickHandler = () => {
    this.props.onCompleteItem(this.props.index)
  }

  render () {
    const cx = this.props.complete ? 'completed' : ''
    return <li className={cx} onClick={this.clickHandler}>{this.props.text}</li>
  }
}

export default Item
