const maths = require('./maths.js')

const operation = process.argv[2]
const firstNumber = parseInt(process.argv[3])
const secondNumber = parseInt(process.argv[4])
const result = maths[operation](firstNumber, secondNumber)
console.log(result)
