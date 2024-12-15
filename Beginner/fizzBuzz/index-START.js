/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        }else if(i % 3 == 0) {
            console.log('fizz')
        }else if(i % 5 == 0) {
            console.log('buzz')
        }else {
            console.log(i)
        }
    }
}

//for loop starting at 1, ending when counter == n
//three conditionals
//if num is divisible by 3 & 5, print Fizzbuzz
//if just 3, print Fizz
//if just 5, print Buzz


module.exports = fizzBuzz