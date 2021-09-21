const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char)

function countVowels(str) {
    if (str.length == 0) return 0

    let first = isVowel(str[0]) ? 1 : 0
    return first + countVowels(str.slice(1))
}


console.log(countVowels("the quick brown fox jumps over the lazy dog"));


function isPolindrom(str) {

    if (str.length <= 1) return true

    let first = str[0]
    let last = str[str.length - 1]

    if (first === last) {
        return isPolindrom(str.substring(1, str.length - 1))
    }

    return false
}

console.log(isPolindrom("ubba"));


// const countVowels = (str) => {
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if (isVowel(str[i])) {
//             count++
//         }

//     }
//     return count
// }


// console.log(countVowels("the quick brown fox jumps over lazy dog"));