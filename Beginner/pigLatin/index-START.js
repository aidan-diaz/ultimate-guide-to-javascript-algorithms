//IMPERATIVE APPROACH

function pigLatin(text) {

    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelIndex
    if(vowels.includes(str[0])) {
        return text + 'way'
    }else {
        for(const char of str) {
            if(vowels.includes(char)) {
                vowelIndex = str.indexOf(char)
                break;
            }
        }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
    }
}

//if first letter is vowel, concatenate 'way' to word and return it
//if first letter is NOT vowel, loop through str until vowel. slice beginning consonants and slice rest of word separately. concatenate consonants and 'ay' to rest of word and return
//will need to loop through if not vowel at start


//DECLARATIVE APPROACH (NO IDEA HOW TO DO THIS ONE INITIALLY - STUDY IT) --> 88% SLOWER

// function pigLatin(str) {
//     return str
//     .replace(/^([aeiouy])(._)/, '$1$2way')
//     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// }