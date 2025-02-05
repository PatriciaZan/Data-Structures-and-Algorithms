const isValidParenthesis = (str) => {
    const stack = []

    const brackets = {
        "{": "}",
        "[": "]",
        "(": ")",
    };

    for (let char of str){
        if(brackets[char]){
            stack.push(char) // will push into the stack array
        } else{
            const top = stack.pop()

            if(!top | brackets[top] != char){ 
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValidParenthesis("(){}[]"));   // True
console.log(isValidParenthesis("([)]"));    // False
console.log(isValidParenthesis("()"));     // True
console.log(isValidParenthesis("("));     // Fasle
