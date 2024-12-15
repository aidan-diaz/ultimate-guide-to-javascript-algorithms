/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

//MY SOLUTION

function factorial(n) {
    let product = 1
    while(n > 0) {
        product *= n
        n--
    }
    return product
}

//create product variable, set to 1
//run while loop
//keep multiplying current num by product
//after each multiply, set n to be n - 1
//return product

module.exports = factorial