
function makeCounter() {
    let counter = 0

    return () => ++counter
}

const count = makeCounter()

console.log(count()); //1
console.log(count()); //2
console.log(count()); //3

//Exercise 
 function strBuilder(str) {
     return function next(t){
         if(typeof t == "string"){
             return strBuilder(str + t)
         }
         return str
     }
 }


 let hello = strBuilder("Hello, ")
 let kyle = hello("Kyle")
 let susan = hello("Susan")
 let question = kyle("?")()
 let greeting = susan("!")()


 console.log(greeting);
 console.log(strBuilder("Hello, ")("")("kyle")(".")("")());

 

