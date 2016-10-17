const numbers = [4, 8, 12, 15, 16, 23, 42]

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

const each = numbers.forEach((n) => {
  // console.log(n, n * n)
  return n * n
})

console.log(each)

const squares = numbers.map((n) => {
  return n * n
})

console.log(squares)

const odds = numbers.filter((n) => {
  return n % 2 === 1
})

console.log(odds)

const sum = numbers.reduce((t, n) => t + n)

console.log(sum)

let t = 0
for (let i = 0; i < numbers.length; i++) {
  t += numbers[i]
}

console.log(t)

const firstOdd = numbers.find((n) => {
  return n % 2 === 1
})

console.log(firstOdd)
