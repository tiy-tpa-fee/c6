// console.log("Hello, from this script")

const pi = 3.141597

let n = 5;

n = "four";

const hello = 'Hello, World.'
const hello2 = "Hello, World!"

const primes = [
  1, 3, 4, 7, 11, 13, 17, 19, 23
]

const vowels = [
  "a", "e", "i", "o", "u", "y"
]

// vowels[0] -> "a"
// vowels[1] -> "e", etc...

const glossary = {
  variable: "A placeholder for a ...",
  loop: "A repetitive action ...",
  blue: "A Color"
}

// true;
// false;
// null;

if (n === 5) {
  console.log("N IS FIVE")
} else {
  console.log("N IS NOT FIVE")
}

if (n === "four") {
  console.log("N IS FOUR")
}

let x = 0
while (x < 10) {
  console.log(x)
  // x = x + 1
  // x += 1
  x++
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let i = 0; i < vowels.length; i++) {
  // let statement;
  // if (i === vowels.length - 1) {
  //   statement = " is sometimes a vowel."
  // } else {
  //   statement = " is a vowel."
  // }
  let statement = i === vowels.length - 1 ? " is sometimes a vowel." : " is a vowel."
  console.log(vowels[i] + statement);
}
