const FPS = 30
const SPEED = 2

const makeItRain = () => {
  const main = document.querySelector('main')
  const drop = document.createElement('img')
  drop.src = '/images/droplet.svg'
  drop.height = 24
  drop.style.left = Math.floor(Math.random() * document.body.clientWidth) + 'px'
  drop.style.top = Math.floor(Math.random() * 20) + 'px'
  main.appendChild(drop)
}

const animate = () => {
  const main = document.querySelector('main')
  for (let drop of main.children) {
    const x = Number(drop.style.left.split('px')[0])
    const y = Number(drop.style.top.split('px')[0])
    const mod = x % 3 // Modify some drops to move faster
    if (y < document.body.clientHeight) {
      drop.style.top = (y + SPEED + mod) + 'px'
    } else {
      main.removeChild(drop)
    }
  }
}

const main = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', (event) => {
    event.preventDefault()
    makeItRain()
  })

  window.setInterval(animate, 1000 / FPS)
}

document.addEventListener('DOMContentLoaded', main)
