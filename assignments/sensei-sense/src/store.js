import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers'

// Create our default application state.
const defaultState = {
  currentMove: [],
  moves: []
}

const store = createStore(
  rootReducer,
  defaultState,
  window.devToolsExtension && window.devToolsExtension()
)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
