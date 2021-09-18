
const spreadArgs = (fn) => (args) => fn(...args)

const sum = (x,y,z,w) => x + y + z + w

const unSpreadArgs = (fn) => (...args) =>fn(args)

const unSpread = (args) => args

const getSpreadArgs = spreadArgs(sum)
const getUnSpreadArgs = unSpreadArgs(unSpread)


console.log(getSpreadArgs([1,2,3,4]));
console.log(getUnSpreadArgs(1,2,3,4));