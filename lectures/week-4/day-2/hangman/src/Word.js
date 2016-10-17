import React, { Component } from 'react'
import Letter from './Letter'
import './Word.css'

class Word extends Component {

  render() {
    // This is the kicker right here. We're going to split the string into an array
    // of each letters, and `map` over that, making a <Letter /> compenent for each.
    // Then we can put that right into our <div> in the output.
    const letters = this.props.solution.split('').map((letter, index) => {
      // Search the letters that have been "used" so far and see if
      // any of them are this letter, if it's undefeind, the letter is
      // not found. `isFound` will be `true` or `false`.
      const isFound = this.props.used.find((used) => used === letter) !== undefined
      // When you have an array of React components, you need to give them
      // a unique key, it's usually convienent to just use the index
      // of the array.
      return <Letter value={letter} revealed={isFound} key={index} />
    })

    return <div className='Word'>
      {letters}
    </div>
  }
}

export default Word
