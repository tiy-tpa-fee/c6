import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import { App, Game, Leaderboard, Title } from './components'
import store, { history } from './store'

const root = <Provider store={store}>
  <Router history={history}>
    <Route component={App}>
      <Route path='/' component={Title} />
      <Route path='/game' component={Game} />
      <Route path='/scores' component={Leaderboard} />
    </Route>
  </Router>
</Provider>

render(root, document.getElementById('root'))
