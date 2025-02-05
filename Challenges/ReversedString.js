function reverseString(string){
    // 1. Must create empty stack
    const stack = [] // will have all the methods

    for(let char of string){
        stack.push(char)

    }

    let reversedStr = "";

    while(stack.length > 0){
        reversedStr += stack.pop()
    }
    
    return reversedStr;
    
}

const reversedString = reverseString("hello world")
console.log(reversedString)
