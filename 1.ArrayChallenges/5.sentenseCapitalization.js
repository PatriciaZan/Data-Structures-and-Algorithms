// 1. Make the String lowercase
// 2. Convert string to array
// 3. Capitalize each word
// 4. Convert array back to string

const capitalization = sentence => {
   return sentence
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase()
                + word.slice(1)).join(' ')
    
}

console.log(capitalization('patricia zan'))