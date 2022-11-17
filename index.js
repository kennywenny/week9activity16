const maths = require('./maths.js')

const operation = process.argv[2]
const firstNumber = parseInt(process.argv[3])
const secondNumber = parseInt(process.argv[4])
if (operation === 'sum') {
  const result = maths.sum(firstNumber, secondNumber)
  console.log(result)
} else if (operation === 'difference') {
  const result = maths.difference(firstNumber, secondNumber)
  console.log(result)
} else if (operation === 'product') {
  const result = maths.product(firstNumber, secondNumber)
  console.log(result)
} else if (operation === 'quotient') {
  const result = maths.quotient(firstNumber, secondNumber)
  console.log(result)
}


// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
