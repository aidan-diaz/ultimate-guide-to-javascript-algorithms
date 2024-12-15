/* Given an integer, return an integer that has the reverse ordering of that which was received. 
E.g reverseInteger(-123) // should return -321 */

//MY SOLUTION ATTEMPT WITHOUT LOOKING

function reverseInteger(integer) {
    if(integer < 0) {
        const intToArr = String(integer).split('').reverse()
        const negativeSign = intToArr.splice(intToArr.length - 1).join('')
        const newNum = Number( negativeSign + intToArr.join('') )
        return newNum
    }else {
        return Number(integer.toString().split('').reverse().join(''))
    }
}

//check and see if integer is < 0
//if so, convert to str, splice 0 index off, then reverse rest of str
//concat reversed to the '-' and convert back to num
//return updated num
//else just convert to str, split, reverse, join, convert back to num and return


//scotch.io SOLUTION

// Reverses a string
// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }

// // Reverses an integer
// function reverseInteger(num) {
//     let reversedNumber = parseInt(reverseString(num.toString()))

//     return (reversedNumber * Math.sign(num))
// }