/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//ITERATIVE

function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for(let i = 0; i < text.length; i++) {
        if( vowels.includes(text[i].toLowerCase()) ) {
            counter++
        }
    }
    return counter
}

//declare counter var, set to 0
//declare arr var that contains vowels
//loop through input str
//if a char is a, e, i, o, or u, add 1 to counter
//return counter

//REGEX (STUDY) - 88% FASTER THAN ITERATIVE APPROACH
// function vowelsCounter(text) {
//     let matchingInstances = text.match(/[aeiou]/gi)

//     if(matchingInstances) {
//         return matchingInstances.length
//     }else {
//         return 0
//     }
    
// }


module.exports = vowelsCounter;
