const uniqID = () => Math.floor(Math.random() + 1 * 10)

const makeRecord = (name) => ({ id: uniqID(), name })

function map(mapper, groupOfName) {
    let groupOfNameAndID = []

    for (const name of groupOfName) {
        groupOfNameAndID.push(mapper(name))
    }

    return groupOfNameAndID

}

console.log(map(makeRecord, ["Leandro", "John"]));
