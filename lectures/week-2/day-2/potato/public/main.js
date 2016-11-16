const main = () => {
  const root = document.querySelector('#heading')
  root.textContent = 'Hello, World!'

  const listItems = document.querySelectorAll('li')
  for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i]
    li.textContent = li.textContent.toUpperCase()
  }

  const finnAndJake = 'http://i.imgur.com/2sZW4m5.gif'
  document.querySelector('img').src = finnAndJake
}

document.addEventListener('DOMContentLoaded', main)
