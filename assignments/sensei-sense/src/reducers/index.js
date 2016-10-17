import { combineReducers } from 'redux'

/*
  Reducers
  Reducers match up the dispatched (fired) action with a function that should be called.
  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state
*/

import { routerReducer } from 'react-router-redux' // we need this for react-router
import currentMove from './currentMove'
import moves from './moves'

// Combine all our reducers together
const rootReducer = combineReducers({
  currentMove,
  moves,
  routing: routerReducer
})

export default rootReducer
