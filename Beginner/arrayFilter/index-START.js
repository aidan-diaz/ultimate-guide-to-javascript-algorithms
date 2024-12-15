/* Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below: 

arrayFilter(arr, func)

*/

//MY SOLUTION ATTEMPT

// function arrayFilter(arr, func) {
//     return arr.filter(func)
// }

//IMPERATIVE APPROACH --> OPTIMAL

// function arrayFilter(arr, func) {
//     for (let elem of arr) {
//       if (func(elem)) {
//         return elem
//       }
//     }
//     return undefined
//   }

//FILTER APPROACH

function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
}


//FIND METHOD

// function arrayFilter(arr, func) {
//     return arr.find(func)
// }
