import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [{
        label: 'apple',
        done: false
      }]
    }
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, {
        label: this.state.value, done: false
      }],
      value: ''
    })
  }

  toggleItem (i) {
    const items = this.state.items.slice()
    items[i].done = !items[i].done
    this.setState({
      items: items
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      return <li
        onClick={() => this.toggleItem(i)}
        key={i}>
        {item.done ? '√' : ''}
        {item.label}
      </li>
    })
    return <div>
      <h1>One List</h1>
      <ul>{items}</ul>
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type='text'
          onChange={e => this.handleChange(e)}
          value={this.state.value} />
      </form>
    </div>
  }
}

export default App
