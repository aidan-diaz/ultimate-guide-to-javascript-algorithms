/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length.
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

//MY WAY WITHOUT LOOKING AT SOLUTIONS

function chunkArray(array, size) {
    const newArr = []
    while(array.length > 0) {
        const nestedArr = array.splice(0, size)
        newArr.push(nestedArr)
    }
    return newArr
}

//create new arr var
//run while loop while array still has length
//if still length, splice from 0 to specified sizr
//push to new arr
//return new arr


//LOOPING SOLUTION
// function chunkArray(array, size) {
//     let result = []
//     for (value of array){
//         let lastArray = result[result.length -1 ]
//         if(!lastArray || lastArray.length == size){
//             result.push([value])
//         } else{
//             lastArray.push(value)
//         }
//     }
//     return result
// }

//LOOPING THROUGH # OF CHUNKS

// function chunkArray(array, size) {
//     let result = []
//     let arrayCopy = [...array]
//     while (arrayCopy.length > 0) {
//         result.push(arrayCopy.splice(0, size))
//     }
//     return result
// }


//USING SLICE (FASTEST WAY)

// function chunkArray(array, size) {
//     let result = []
//     for (let i = 0; i < array.length; i += size) {
//         let chunk = array.slice(i, i + size)
//         result.push(chunk)
//     }
//     return result
// }


//RECURSION //46% SLOWER THAN SLICE METHOD

// function chunkArray(array, size) {
//     if(array.length <= size){
//         return [array]
//     }
//     return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
//  }


module.exports = chunkArray