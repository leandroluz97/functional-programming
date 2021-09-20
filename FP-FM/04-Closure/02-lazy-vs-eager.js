//Lazy
function repeater(count) {
    return function allTheAs() {
        return "".padStart(count,"A")   
    }
}

let A = repeater(10) 

A()  //"AAAAAAAAAA"
A()  //"AAAAAAAAAA"

//Eager
function repeater(count) {
    let str = "".padStart(count,"A")
    return function allTheAs() {
        return str
    }
}

let A = repeater(10)  //"AAAAAAAAAA"

A()   
A()
