// 1. How man times a specific word apears in a sentence.

const text = "Hello my name name name is Patricia";

const wordCounter = (sentence) => {
    let words = sentence.toLowerCase().split(' ')

    // Create a hash table
    const wordMap  = {}

    for(const word of words){
        if(word in wordMap){
            wordMap[word]++
        }else{
            wordMap[word] = 1
        }
    }
    return wordMap

    // console.log(temp);
}

console.log(wordCounter(text))