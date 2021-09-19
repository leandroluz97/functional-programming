 
//Is Odd

const not = (fn) => (n) => !fn(n)

const isOdd = (n) => n % 2 !== 0

const isEven = not(isOdd)

console.log(`Is Even: ${isEven(4)}`);


//Is Short Enough
const printIf = (fn) => (str) => !fn(str)

const isShortEnough = (str) => str.length < 5

const isLong = printIf(isShortEnough)

console.log(`Is Long: ${isLong('leandro')}`);

//


const mod = (y) => (x) => x % y

const equal = (y) => (x) => x === y

const modTwo = mod(2)

const equalOne = equal(1)

const isOddOne = (x) => equalOne( modTwo(x) )

const compose = (fn1, fn2) => (v) => fn2( fn1(v) )

const composed = compose(modTwo, equalOne)

console.log(composed(5));




