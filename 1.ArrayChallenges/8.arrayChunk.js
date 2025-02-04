/*
    Write a function that takes an array and a chunk size as input.
    The funtion should return a new array where the original array
    is split int ochunks of the specified size.

    chunk([1,2,3,4,5,6,7,8], 3)   [[1,2,3], [4,5,6], [7,8]]
    chunkArray([1,2,3,4,5], 2)    //Output: [[1,2], [3,4]]
*/

const chunk = (array, size)=> {
    // create a chunk array
    const chunked = []

    let index = 0

    while( index < array.length){
                        // this method will split the array
        const chunk = array.slice(index, index + size)
        console.log('_____', chunk);
        
        chunked.push(chunk)
        index += size;
     }

    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7,8], 3));
