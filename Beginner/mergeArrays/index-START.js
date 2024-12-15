/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//MY SOLUTION WITHOUT LOOKING AT OTHER SOLUTIONS

function mergeArrays(...arrays) {

    const removedDuplicatesArr = Array.from( new Set( arrays.flat() ) )
    return removedDuplicatesArr
}

//flatten input arrays into one array
//make new set from that array
//turn set back into array and return


//SPREAD OPERATOR AND SETS --> SECOND FASTEST - 33% SLOWER THAN FILTER

// function mergeArrays(...arrays) {
//     let jointArray = []

//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
//     return [...new Set([...jointArray])]
// }


//FILTER METHOD --> FASTEST

// function mergeArrays(...arrays) {
//     let jointArray = []

//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
//     return uniqueArray
// }


//REDUCE

// function mergeArrays(...arrays) {
//     let jointArray = []

//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     })
//     const uniqueArray = jointArray.reduce((newArray, item) =>{
//         if (newArray.includes(item)){
//             return newArray
//         } else {
//             return [...newArray, item]
//         }
//     }, [])
//     return uniqueArray
// }

module.exports = mergeArrays