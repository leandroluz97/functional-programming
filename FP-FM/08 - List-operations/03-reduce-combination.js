const addToRecord = (record, [key, value]) => ({ ...record, [key]: value })


function reduce(reducer, initialValue, groupOfSchoolWorkers) {

    let ret = initialValue

    for (const schoolWorker of groupOfSchoolWorkers) {

        ret = reducer(ret, schoolWorker)

    }

    return ret
}


console.log(reduce(addToRecord, {}, [
    ["name", "Kyle"],
    ["age", 39],
    ["isTeacher", true]
]));



const add1 = (v) => v + 1
const mul2 = (v) => v * 2
const div3 = (v) => v / 3

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)

let list = [2, 5, 8, 10, 15, 20]


const result = list.map(compose(add1, mul2, div3))

console.log(result);