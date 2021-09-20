//currying allow us to shape binary function to unary 

let sum = (x, y) => x + y
let triple = (x) => x * 3
let divBy = (y, x) => x / y


divBy(2, triple(sum(3, 5)))

sum = curry(2, sum)
divBy = curry(2, divBy)

composeThree(divBy(2), triple, sum(3))