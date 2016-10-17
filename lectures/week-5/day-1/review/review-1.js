let four = 4

function square (n) {
  return n * n
}

// All almost identical to the above
// for the most part... (ignoring
// lexical this and hoisting)

// const square = function (n) {
//   return n * n
// }

// const square = (n) => {
//   return n * n
// }

// We can omit the braces {} and have
// an implicit return for one line functions
//
// const square = (n) => n * n

console.log(square(four))

let numbers = [3, 4, 5]

const newNumbers = numbers.map(square)

const p = document.createElement('p')
p.textContent = newNumbers.toString()
document.querySelector('body').appendChild(p)

numbers = numbers.concat([43, 235, 453])

console.log(numbers)
