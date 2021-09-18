//Shape Adapters
const fnArgs = (...args) => args;

const unary = (fn) => (arg) => fn(arg);

const binary = (fn) => (arg1, arg2) => fn(arg1, arg2);

let getUnary = unary(fnArgs);
let getBinary = binary(fnArgs);

console.log(getUnary(1, 2, 3)); // [1]
console.log(getBinary(1, 2, 3)); // [1,2]
