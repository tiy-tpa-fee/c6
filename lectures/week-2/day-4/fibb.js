// Each new term in the Fibonacci sequence is generated
// by adding the previous two terms. By starting with
// 1 and 2, the first 10 terms will be:
//   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence
// whose values do not exceed 4 million, find the sum
// of the even-valued terms.

const fibbonacci = (n) => {
  let sequence = []
  let temp
  let a = 0
  let b = 1

  while (n >= 0) {
    temp = a
    a = a + b
    b = temp
    sequence.push(a)
    n--
  }
  return sequence
}

const displayFibb = (n) => {
  const list = document.querySelector('.fibb-sequence')
  while (list.firstChild) list.removeChild(list.firstChild)

  fibbonacci(n).forEach((f) => {
    const li = document.createElement('li')
    li.textContent = f
    list.appendChild(li)
  })
}

const handleOnReady = () => {
  const button = document.querySelector('button')
  const input = document.querySelector('input')
  button.addEventListener('click', () => {
    const value = Number(input.value)
    if (!isNaN(value)) {
      displayFibb(input.value)
    } else {
      window.alert('That\'s not a number, silly!')
      input.value = 10
    }
  })
}

document.addEventListener('DOMContentLoaded', handleOnReady)
