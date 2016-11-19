const makeHappy = () => {
  const finnAndJake = 'http://i.imgur.com/2sZW4m5.gif'
  document.querySelector('img').src = finnAndJake
}

const main = () => {
  const root = document.querySelector('#heading')
  root.textContent = 'Hello, World!'

  const listItems = document.querySelectorAll('li')
  for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i]
    li.textContent = li.textContent.toUpperCase()
  }

  const button = document.querySelector('button.happy')
  button.addEventListener('click', makeHappy)

  const box = document.querySelector('.box')
  box.addEventListener('mouseover', () => {
    box.className = 'box awesome'
  })

  box.addEventListener('mouseout', () => {
    box.className = 'box'
  })
}

document.addEventListener('DOMContentLoaded', main)
