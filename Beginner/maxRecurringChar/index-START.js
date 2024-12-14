/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//MAPPING --> FASTER BY ABOUT 30%

function maxRecurringChar(text) {
    const map = {}
    for(const char of text) {
        if(map[char]) {
            map[char] += 1
        }else {
            map[char] = 1
        }
    }
    let frequencies = -Infinity
    let mostCommon
    for(const char in map) {
        if(map[char] > frequencies) {
            mostCommon = char
            frequencies = map[char]
        }
    }
    return mostCommon
}

//declare a map variable, set to empty obj
//evaluate each char in text
//if char in text does not exist as obj property, create the property, set val to 1
//if it does exist, add 1 to val
//loop through new map
//declare a most common variable, set to 0
//if cur map val > common val, reassign largest val to cur val
//return most common val


//ARR FROM CHAR MAP
// function maxRecurringChar(text) {
//     const map = {}
//     for(const char of text) {
//         if(map[char]) {
//             map[char] += 1
//         }else {
//             map[char] = 1
//         }
//     }
//     //arr of all properties from map
//     const charArray = Object.keys(map)
//     //arr of all values from map properties
//     const valuesArray = Object.values(map)
//     const mostFrequent = Math.max(...valuesArray)

//     return charArray[valuesArray.indexOf(mostFrequent)]

// }

//create empty map var
//loop through text
//if map has a prop of cur char, add 1 to that prop's val
//otherwise create prop and set val to 1


module.exports = maxRecurringChar;