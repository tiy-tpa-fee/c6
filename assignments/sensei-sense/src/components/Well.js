import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

class Well extends React.Component {

  static propTypes = {
    color: React.PropTypes.string
  }

  constructor () {
    super()
    this.state = {
      position: {
        x: 0,
        y: 0
      },
      origin: {
        x: 0,
        y: 0
      }
    }
  }

  _handleDragStart = (event) => {
    const position = ReactDOM.findDOMNode(this.refs.orb).getBoundingClientRect()
    if (event.dataTransfer) {
      const dragImage = document.createElement('img')
      const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      dragImage.src = transparentPixel
      event.dataTransfer.setDragImage(dragImage, 0, 0)
      event.dataTransfer.setData('text/plain', this.props.color)
    }
    this.setState({
      dragging: true,
      origin: {
        x: position.left + (position.width / 2),
        y: position.top + (position.height / 2)
      }
    })
  }

  _handleMouseDown = (event) => {
    this.setState({
      dragging: true
    })
  }

  _handleMouseUp = (event) => {
    this.setState({
      dragging: false
    })
  }

  _handleDrag = (event) => {
    if (event.changedTouches) {
      // Handle mobile touch drag
      this.setState({
        position: {
          x: event.changedTouches[0].clientX - this.state.origin.x,
          y: event.changedTouches[0].clientY - this.state.origin.y
        }
      })
    } else {
      // Handle regular drag
      this.setState({
        position: {
          x: event.clientX - this.state.origin.x,
          y: event.clientY - this.state.origin.y
        }
      })
    }
  }

  _handleDragEnd = (event) => {
    this.setState({
      dragging: false,
      position: {
        x: 0,
        y: 0
      }
    })
  }

  render () {
    let classes = cx('color', this.props.color, { dragging: this.state.dragging })
    return <div className='well'
      draggable
      onDragStart={this._handleDragStart}
      onDragEnd={this._handleDragEnd}
      onDrag={this._handleDrag}
      onTouchStart={this._handleDragStart}
      onTouchEnd={this._handleDragEnd}
      onTouchMove={this._handleDrag}
      onMouseDown={this._handleMouseDown}
      onMouseUp={this._handleMouseUp} >
      <div ref='orb'
        className={classes}
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
          position: 'relative'
        }} />
    </div>
  }
}

export default Well
