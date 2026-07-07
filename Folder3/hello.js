const math = require('./math')

console.log("Math value is",math.add(2,4));
console.log("Math value is",math.sub(2,4));

const {add, sub} = require("./math")
console.log("Value is",add(8,4))
console.log("Value is",sub(8,4))

