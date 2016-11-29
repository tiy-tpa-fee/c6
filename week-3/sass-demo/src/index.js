import 'file!./index.html'
import './styles/screen.sass'

const main = () => {
  document.querySelector('h1').textContent += '!!'
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.accept('file!./index.html', () => {
    window.location.reload()
  })
}
