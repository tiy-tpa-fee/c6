import React from 'react'
import { Link } from 'react-router'

export default () => {
  return <div>
    <h2>Title</h2>

    <p>TODO: Describe how to play the game and make a play button</p>

    <Link to='/game'>PLAY!</Link>
  </div>
}
