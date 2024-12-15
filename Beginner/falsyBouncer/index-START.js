/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//MY SOLUTION ATTEMPT WITHOUT LOOKING AT OTHER SOLUTIONS

function falsyBouncer(array) {
    return array.filter(element => element)
}

//filter the input array
//if a value is falsy, do not include it in the filtered array
//return the filtered array


//SECOND SOLUTION ATTEMPT WITHOUT LOOKING

// function falsyBouncer(array) {
//     const truthyArr = []
//     for(const element of array) {
//         if(element) {
//             truthyArr.push(element)
//         }
//     }
//     return truthyArr
// }

//create truthy arr var
//for loop
//if current el is not truthy, do not push
//else, push
//return truthy arr


//FOR OF LOOP --> 5% FASTER

// function falsyBouncer(array) {
//     let result =[]
//     //loop through with each array value
//     for (value of array){
//     // push into result if truthy
//         if(value){
//             result.push(value)
//         }
//     }
//     return result
// }

//FILTER METHOD

// function falsyBouncer(array) {
//     return array.filter((value) =>{
//       return Boolean(value)     })
// }


module.exports = falsyBouncer