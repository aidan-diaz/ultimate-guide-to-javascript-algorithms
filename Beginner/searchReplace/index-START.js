/* The Challenge
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. 
E.g 
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
should return "He is Sitting on the couch" */

//REPLACE METHOD --> NO TEST CASES FOR THIS ONE - RAN IN CONSOLE AND PASSED TEST CASES

function searchReplace(sentence, word, replacementWord) {
    if( word[0] == word[0].toUpperCase() ) {
        replacementWord = replacementWord[0].toUpperCase() + replacementWord.substring(1)
    }else {
        replacementWord = replacementWord[0].toLowerCase() + replacementWord.substring(1)
    }
    return sentence.replace(word, replacementWord)
}

//use replace method on sentence
//if original word first letter is uppercase, make sure first letter of replacement word is uppercase
//same as above for lowercase as well
//return new sentence


//REGEX --> DID NOT KNOW HOW TO DO - STUDY (72% SLOWER THAN ABOVE SOLUTION)

// function searchReplace(str, word, newWord) {
//     let regex = new RegExp(word, "gi");
//     if (/[A-Z]/.test(word[0])) {
//         newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
//     }
//     return str.replace(regex, newWord)
// }