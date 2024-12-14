/* CHALLENGE
Given a sentence, return the longest word in the string.
*/

//FOR LOOP

// function longestWord(text) {
//     let longest = ''
//     const arr = text.split(' ')
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].length > longest.length) {
//             longest = arr[i]
//         }
//     }
//     return longest
// }

//create variable to store longest word in, initially set to empty str
//split text into arr by spaces
//loop through arr
//if current word length > longest word length, update longest word to be current word
//return longest word


//REDUCE METHOD
// (STUDY - DID NOT KNOW HOW TO DO)

// function longestWord(text) {
//     const result = text.split(' ').reduce((longestWord, currentWord) => {
//         if(currentWord.length > longestWord.length) {
//             return currentWord
//         }else {
//             return longestWord
//         }
//     }, '')
//     return result
// }

//SORT METHOD --> 83% SLOWER THAN OTHER SOLUTIONS

function longestWord(text) {
    const arr = text.split(' ').sort( (a, b) => b.length - a.length )
    return arr[0]
}

module.exports = longestWord