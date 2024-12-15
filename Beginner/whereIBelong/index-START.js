/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//MY SOLUTION ATTEMPT WITHOUT LOOKING AT OTHER SOLUTIONS

function whereIBelong(arr, num) {
   if(arr == null || !arr.length) {
      return 0
   }
   arr = arr.sort( (a, b) => a - b )

   if(num < arr[0]) {
      return 0
   }else if(num > arr[arr.length - 1]) {
      return arr.length
   }

   for(let i = 0; i < arr.length; i++) {
      if(num > arr[i] && num < arr[i + 1]) {
         return i + 1
      }else if(num == arr[i]) {
         return i
      }
   }

}

//if no arr or empty, return 0
//sort arr from low to high
//for loop
//check num against all nums in arr
//if num > current num and < next num, return current index
//if num > all num, return last index
//if num < all num, return 0


//FOR LOOP

// function whereIBelong(arr, num) {
//    arr.sort((a, b) => {
//        return a - b
//    })
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] >= num) {            
            // return i
//        }
//    }
//    return arr.length
// }

//FOR LOOP #2 - COUNT SMALLER VALUES --> AT LEAST 90% FASTER THAN OTHER SOLUTIONS

// function whereIBelong(arr, num) {
//    var counter = 0
//    for (i = 0; i < arr.length; i++) {
//        if (num > arr++[++i]) {
//            counter++;
//        }
//    } 
//    return counter
// }


//WHILE LOOP

// function whereIBelong(arr, num) {
//    arr.sort((a, b) => {
//        return a - b
//    })
//    let counter = 0;
//    while (num > arr[counter]) {
//        counter++
//    }
//    return counter
// }


//PUSH, SORT, FIND INDEX

// function whereIBelong(arr, num) {
//    arr.push(num)
//    arr.sort((a, b) => a - b)
//    return arr.indexOf(num)
// }


module.exports = whereIBelong