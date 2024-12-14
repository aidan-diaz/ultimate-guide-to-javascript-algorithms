/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/


//INTUITIVE

// function palindromeChecker(text) {
//     text = text.toLowerCase()
//     const textReversed = text.split('').reverse().join('')
//     return text == textReversed
// }

//make input text lowercase
//make variable for reversedText
//set to value of text split rev join
//return comparison of text and reversedText

//LOOP & COMPARE

function palindromeChecker(text) {
    text = text.toLowerCase()
    for(let i = 0; i < text.length; i++) {
        if( text[i] != text[text.length - (i + 1)]) {
            return false
        }
    }
    return true
}

//make text lowercase
//make for loop
//if text[i] != text[text.length - (i + 1)] return false
//return true outside of loop

module.exports = palindromeChecker;