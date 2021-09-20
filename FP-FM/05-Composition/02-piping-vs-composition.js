
//compose 
//const shippingRate = composeThree(minus2, triple, increment)

//pipe
//const shippingRate = pipeThree(increment, triple, minus2)


//Exercise

const increment = (x) => x + 1
const decrement = (x) => x - 1
const double = (x) => x * 2
const half = (x) => x / 2

//pipe
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)

//compose
const compose = (...fns) => pipe(...fns.reverse())

const f1 = compose(increment, decrement)
const f2 = pipe(decrement, increment)
const f3 = compose(decrement, double, increment, half)
const f4 = pipe(half, increment, double, decrement)
const f5 = compose(increment)
const f6 = pipe(increment)


console.log(f1(3) === 3);
console.log(f1(3) === f2(3));
console.log(f3(3) === 4);
console.log(f3(3) === f4(3));
console.log(f5(3) === 4);
console.log(f5(3) === f6(3));

