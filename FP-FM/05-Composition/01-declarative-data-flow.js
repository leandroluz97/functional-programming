//take an output of one fn and turn it into input of another fn

const minus2 = (x) => x - 2
const triple = (x) => x * 3
const increment = (x) => x + 1

//v1
let tmp = increment(4)
tmp = triple(tmp)
totalCost = basePrice + minus2(tmp)


//v2
totalCost = basedPrice + minus2(triple(increment(4)))



//v3 - Abstration
const shippingRate = (x) => minus2(triple(increment(x)))

totalCost = basedPrice + shippingRate(4)


//v4 - Declarative data Flow
const composeThree = (fn3, fn2, fn1) => (v) => fn3(fn2(fn1(v)))

const shippingRate = composeThree(minus2, triple, increment)

totalCost = basedPrice + shippingRate(4)