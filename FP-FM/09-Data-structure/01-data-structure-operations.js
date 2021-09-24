let customer = {
    name: "Kyle",
    email: "Getify@gmail.com"
}

function mapCustomer(mapper, customer) {
    let newCustomer = {}

    for (const key of Object.keys(customer)) {
        newCustomer[key] = mapper(customer[key])
    }

    return newCustomer
}

const lowerCase = (costumer) => costumer.toLowerCase()


console.log(mapCustomer(lowerCase, customer));


// console.log(mapCustomer(function lower(val) {
//     return val.toLowerCase()
// }, customer));