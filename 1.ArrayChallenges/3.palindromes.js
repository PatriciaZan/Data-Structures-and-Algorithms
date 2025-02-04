// Id the reversed string is equal to the original one then that word is a palindrome!

const checkPalindrome = (word) => {
    const newWord = word.split('').reverse().join('')

    if(newWord === word){
        console.log(`Its a Palindrome! ${newWord} = ${word}`);
    } else{
        console.log(`Not a Palindrome :C ${newWord} != ${word}`);
    }

    newWord === word ? 
        `Its a Palindrome! ${newWord} = ${word}` 
        : `Not a Palindrome :C ${newWord} != ${word}`
}

checkPalindrome('abba')
checkPalindrome('string')
