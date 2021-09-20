function ajax(url, data, cb) {/*... */}

ajax(CUSTOMER_API,{is:42}, renderCustomer)

function getCostumer(data, cb) {
    return ajax(CUSTOMER_API, data, cb)
}

getCostumer({id:42}, renderCustomer)

function getCurrentUser(cb) {
    return getCostumer({id:42},cb)
}


getCurrentUser(renderCustomer)