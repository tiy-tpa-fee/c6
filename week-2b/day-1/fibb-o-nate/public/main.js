const displayFibbs = (event) => {
  if (event) event.preventDefault()
  const input = document.querySelector('input[name=n]')
  const n = parseInt(input.value)

  const fibbs = fibbonacci(n)

  const list = document.querySelector('ul')

  while (list.lastChild) {
    list.removeChild(list.lastChild)
  }

  for (let i = 0; i < fibbs.length; i++) {
    const li = document.createElement('li')
    li.textContent = fibbs[i]

    const hue = Math.round((i / n) * 255)

    li.style.backgroundColor = `hsl(${hue}, 100%, 50%)`

    list.appendChild(li)
  }
}

const fibbonacci = (n) => {
  let sequence = []
  let temp
  let a = 0
  let b = 1

  while (n >= 0) {
    sequence.push(a)
    temp = a
    a = a + b
    b = temp
    n--
  }

  return sequence
}

const main = () => {
  const input = document.querySelector('input')
  input.addEventListener('input', displayFibbs)
  displayFibbs()
}

document.addEventListener('DOMContentLoaded', main)
