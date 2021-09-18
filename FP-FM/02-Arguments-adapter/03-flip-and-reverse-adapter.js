//Flip and Reverse Adapters
const fnArgs = (...args) => args;



//Flip Arguments
const flip = (fn) => (arg1, arg2, ...args) => fn(arg2, arg1, ...args);

const getFlipped = flip(fnArgs);

console.log(getFlipped(1, 2, 3, 4)); //[2,1,3,4]



//Reverse Arguments
const reverseArguments = (fn) => (...args) => fn(...args.reverse());

const getReverseArguments = reverseArguments(fnArgs);

console.log(getReverseArguments(1, 2, 3, 4, 5));
