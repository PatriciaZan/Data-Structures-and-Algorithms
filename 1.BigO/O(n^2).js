function findPairs(arr){
    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`Pair : ${arr[i]}, ${arr[j]}`);
        }
    }

    //O(n)
    for (let q = 0; q < arr.length; q++) {
        console.log('______' , q);
        
        
    }
}
// Combining all the operations we have O(n^2 + n)
// O(n^2) -> Dominant term
// n      -> Non-Dominat term (remove) => 'O(n^2)'

const numbers = [1,2,3,4,5];
findPairs(numbers);