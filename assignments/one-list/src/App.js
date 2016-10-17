import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class App extends Component {

  constructor () {
    super()
    this.state = {
      listItems: [
      ]
    }
  }

  // add the new list text from Input to the state listItems
  addToList = (newListText) => {
    const newListItems = this.state.listItems
    newListItems.push({ text: newListText, complete: false })
    this.setState({
      listItems: newListItems
    })
  }

  completeItem = (index) => {
    const newListItems = this.state.listItems
    newListItems[index].complete = true
    this.setState({
      listItems: newListItems
    })
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List
            items={this.state.listItems}
            onCompleteItem={this.completeItem} />
          <Input onAddToList={this.addToList}/>
        </main>
        <footer>
          &copy; 2016 Pickles of Awesome.
        </footer>
      </div>
    )
  }
}

export default App
