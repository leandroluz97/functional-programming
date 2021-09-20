function ajax(url, data, cb) {/*... */ }

const getCustomer = partial(ajax, CUSTOMER_API)

const getCurrentUser = partial(getCostumer, { id: 42 })

getCostumer({ is: 42 }, renderCustomer)

getCurrentUser(renderCustomer)

