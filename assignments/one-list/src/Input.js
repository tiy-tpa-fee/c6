import React, { Component } from 'react'

class Input extends Component {

  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitHandler = (event) => {
    this.props.onAddToList(this.state.text)
    this.setState({ text: '' })
    event.preventDefault()
  }

  render () {
    return <form onSubmit={this.submitHandler}>
      <input type='text' value={this.state.text}
       onChange={this.handleChange} />
    </form>
  }
}
export default Input
