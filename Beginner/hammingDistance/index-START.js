/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


//FOR LOOP

function hammingDistance(stringA, stringB) {
    let counter = 0
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()
    for(let i = 0; i < stringA.length; i++) {
        if(stringA[i] != stringB[i]) {
            counter += 1
        }
    }
    return counter
}

//declare a counter, set to 0
//make both strs lowercase
//for loop to loop through each char in strs
//if current char in str 1 doesn't equel current char in str 2, add 1 to counter
//return counter

//NOTES GOING FORWARD
//account for edge cases where strs might not be same length

module.exports = hammingDistance