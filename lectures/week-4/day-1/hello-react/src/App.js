import React, { Component } from 'react'
import Header from './Header'
import './App.css'

import tweetie from './twitter.png'

class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a href="http://twitter.com/ambethia">
            <img src={tweetie} alt=""/>
          </a>

        </p>
      </div>
    );
  }
}

export default App;
