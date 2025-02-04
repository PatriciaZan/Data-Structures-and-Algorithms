// 1. OCnvert number to String
// 2. Convert String to array
// 3. Reverse he string
// 4. Convert array back to string
// 5. Return the number


const reverseNumber = (number) => {
    const newNumber = number.toString().split('').reverse().join('')
    return +newNumber
}

console.log(reverseNumber(1234))
 