function hello () {
  console.log('Hello, World')
}

hello()

const square = function (n) {
  return n * n
}

square(8)

const sum = function (a, b) {
  return a + b
}

sum(36, 6)

// I would rather see:

const sum2 = (a, b) => {
  return a + b
}

// Shorthand (if a function has only one statement)

const sum3 = (a, b) => a + b

const greet = () => {
  // dkjfsdkfjsdkjf
  // sdfksd
  return 4
}

greet()

const thing = {
  color: 'purple',
  name: 'Yukaboola'
}

// Map & Reduce

// [2, 3, 4, 5].map((n) => {
//   return n * n
// })

// return statements

let gas = 12

const canDrive = () => {
  if (gas <= 0) {
    console.log('*sputter*')
    return false
  }

  // enableHeadlights()
  // checkMirrors()

  console.log('Rumble rumble')
  return true
}

let c = canDrive()
console.log(c)

gas = 0

console.log(canDrive())
