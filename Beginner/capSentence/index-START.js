/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


//FOR EACH METHOD --> 2ND FASTEST

// function capSentence(text) {
//   const arr = []
//   text.split(' ').forEach( word => {
//     arr.push( word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase() )
//   })
//   return arr.join(' ')
// }

//make an empty arr variable
//split text into arr by space delimiter
//loop through each element using forEach
//for each word, make first letter uppercase and push updated word to arr
//join arr by spaces and return


//MAP AND SLICE --> FASTEST WHEN DONE CORRECTLY

// function capSentence(text) {
//   const arr = text.toLowerCase()
//   .split(' ')
//   .map( word => word.substring(0, 1).toUpperCase() + word.substring(1) )
//   return arr.join(' ')
// }

//split text into arr by spaces
///map each word in arr to be first char uppercase + rest of word to lowercase
//join back together by spaces and return


//MAP AND REPLACE --> SLOWEST

function capSentence(text) {
  const arr = text.toLowerCase()
  .split(' ')
  .map( word => word.replace( word[0], word[0].toUpperCase() ) )
  return arr.join(' ')
}

//make text lowercase
//split into arr by spaces
//map arr
//for each word in arr, replace first char w uppercase char
//join back into str by spaces
//return updated str

module.exports = capSentence