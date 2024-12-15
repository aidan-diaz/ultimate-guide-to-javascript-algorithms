/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//DIRECT COMPARISON (STUDY - DID NOT KNOW REGEX PART) --> THIS SOLUTION IS 52% SLOWER

// function isAnagram(stringA, stringB) {
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }

//make sure both strs are lowercase
//remove any non letter characters
//sort and compare strs


//CHARACTER MAP WAY

// function isAnagram(stringA, stringB) {

//     function createCharMap(text) {
//         let charMap = {}

//         for (let char of text) {
//             if (charMap.hasOwnProperty(char)) {
//                 charMap[char]++
//             } else {
//                 charMap[char] = 1
//             }
//         }

//         return charMap
//     }

//     if (stringA.length === stringB.length) {
//         let stringAMap = createCharMap(stringA)
//         let stringBMap = createCharMap(stringB)
//         for (let char in stringAMap) {
//             if (stringAMap[char] !== stringBMap[char]) {
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

//MY OWN UNIQUE ATTEMPT

function isAnagram(stringA, stringB) {

    if(stringA.length != stringB.length) {
        return false
    }

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()

    let updatedStringA = ''
    let updatedStringB = ''

    for(let i = 0; i < stringA.length; i++) {
        if(letters.includes(stringA[i])) {
            updatedStringA += stringA[i]
        }
        if(letters.includes(stringB[i])) {
            updatedStringB += stringB[i]
        }
    }
    updatedStringA = updatedStringA.split('').sort().join('')
    updatedStringB = updatedStringB.split('').sort().join('')

    return updatedStringA === updatedStringB
}

//if strs not equal length, return false
//otherwise create two str variables, set both to empty str
//loop through str, if char is a letter, add to new str variable
//compare updated str variables


module.exports = isAnagram