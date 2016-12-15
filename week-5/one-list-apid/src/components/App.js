import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      items: []
    }
  }

  // Callback provided by React:
  // https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
  componentDidMount () {
    const URL = 'https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage'
    window.fetch(URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        items: data
      })
    })
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, {
        text: this.state.value, done: false
      }],
      value: ''
    })
  }

  toggleItem (id) {
    const URL = `https://one-list-api.herokuapp.com/items/${id}?access_token=illustriousvoyage`
    window.fetch(URL, {
      method: 'PUT',
      body: JSON.stringify({ item: { complete: true } })
    }).then(() => {
      // const items = this.state.items.slice()
      // items[i].done = !items[i].done
      // this.setState({
      //   items: items
      // })
    })
  }

  render () {
    const items = this.state.items.map((item) => {
      return <li
        onClick={() => this.toggleItem(item.id)}
        key={item.id}>
        {item.done ? '√' : ''}
        {item.text}
      </li>
    })
    return <div>
      <h1>One List</h1>
      <img src={logoImageURL} alt='' />
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
