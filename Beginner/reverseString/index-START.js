/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//METHODS
// function reverseString(text) {
//     return text.split('').reverse().join('')
// }

//split str into array
//reverse array
//join str back together w no delimiter
//return new str


//FOR LOOP
// function reverseString(text) {
//     let reversedStr = ''
//     for(let i = text.length - 1; i >= 0; i--) {
//         reversedStr += text[i]
//     }
//     return reversedStr
// }

//declare variable & assign '' val
//loop through input text starting @ last index, end at 0 index
//for each iteration, concat current char to empty str var
//return updated var


//RECURSION
function reverseString(text) {
    if(text === '') {
        return ''
    }else {
        return reverseString(text.substring(1)) + text[0]
    }
}

//COME BACK TO THIS

//REDUCE
// function reverseString(text) {
//     return text.split('').reduce( (acc, cur) => cur + acc, '')
// }

//use reduce method
//split str into arr
//set acc in empty arr to be ''
//return reduced str


module.exports = reverseString