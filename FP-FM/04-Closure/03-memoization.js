function repeater(count) {
    return memoize(function allTheAs() {
        return "".padStart(count,"A")
    })    
}


let A = repeater(10)  //"AAAAAAAAAA"

A()   
A()