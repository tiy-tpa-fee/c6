const state = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const X = 1
const O = 2
const cellValues = { 0: '', 1: 'X', 2: 'O' }
let playerTurn = X
const drawBoard = () => {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      const col = state[i][j]
      const cell = document.querySelector(
        `table tr:nth-child(${i+1}) td:nth-child(${j+1})`
      )
      cell.textContent = cellValues[col]
    }
  }
  document.querySelector('.message').textContent = `It's ${cellValues[playerTurn]}'s turn.`
}

const play = (row, col, player) => {
  state[row][col] = player
  playerTurn = player === X ? O : X
}

const init = () => {
  const rows = document.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
      cols[j].addEventListener('click', () => {
        play(i, j, playerTurn)
        drawBoard()
      })
    }
  }
  drawBoard()
}

document.addEventListener('DOMContentLoaded', init)
