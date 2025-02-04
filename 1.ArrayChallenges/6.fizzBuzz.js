// 1. Print numbers from 1 to n
// If number is divisible by 3, print "Fizz"
// If number is divisible by 5, print "Buzz"
// If number is divisible by 3 and 5, print "FizzBuzz"
// Else, print the number

const fizzBuzz = number => {
    for (let i = 1; i <= number; i++) {
        if(i % 3 === 0){
            console.log('FIZZ');            
        } else if(i % 5 === 0){
            console.log('BUZZ');
        } else if( i % 3 === 0 && i % 5 === 0){
            console.log('FIZZ BUZZ');
        } else{
            console.log(i);
            
        }
    }         
}
    
fizzBuzz(10)
