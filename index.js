const maths = require('./maths.js')

const operation = process.argv[2]
const firstNumber = parseInt(process.argv[3])
const secondNumber = parseInt(process.argv[4])
switch (operation) {
  case 'sum':
    console.log(maths.sum(firstNumber, secondNumber))
    return
  case 'difference':
    console.log(maths.difference(firstNumber, secondNumber))
    return
  case 'product':
    console.log(maths.product(firstNumber, secondNumber))
    return
  case 'quotient':
    console.log(maths.quotient(firstNumber, secondNumber))
    return
}
