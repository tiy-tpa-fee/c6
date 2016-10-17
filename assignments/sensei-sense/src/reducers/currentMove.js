function currentMove (state = [], action) {
  switch (action.type) {
    case 'SET_COLOR':
      const move = state.slice()
      move[action.cupId] = action.color
      return move
    default:
      return state
  }
}

export default currentMove
