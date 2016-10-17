import React from 'react'
import cx from 'classnames'

// TODO: Handling touch events (for mobile) is not implemented.
// React doesn't have `touchenter` so this will likely require some refactoring...
class Cup extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    droppable: React.PropTypes.bool,
    setColor: React.PropTypes.func,
    id: React.PropTypes.number
  }

  constructor (props) {
    super(props)
    this.state = {
      highlight: false
    }
  }

  _handleDragEnter = (event) => {
    this.setState({
      highlight: true
    })
  }

  _handleDragLeave = (event) => {
    this.setState({
      highlight: false
    })
  }

  _handleDragOver = (event) => {
    // Preventing the default is required to allow
    // drop event to occur.
    event.preventDefault()
  }

  _handleDrop = (event) => {
    const color = event.dataTransfer.getData('text/plain')
    this.setState({
      highlight: false
    })
    this.props.setColor(this.props.id, color)
    // Prevent some browsers from trying to treat the dropped color
    // as a link.
    event.preventDefault()
  }

  render () {
    let color, front
    if (this.props.color) {
      color = <div className={cx('color', this.props.color)} />
    }
    if (this.props.droppable) {
      front = <div
        className='front'
        onDragEnter={this._handleDragEnter}
        onDragLeave={this._handleDragLeave}
        onDragOver={this._handleDragOver}
        onDrop={this._handleDrop}
      />
    } else {
      front = <div className='front' />
    }

    return <div className={cx('cup', { highlight: this.state.highlight })}>
      {color}
      {front}
    </div>
  }
}

export default Cup
