/*
    You have a list of numbers and a target number.
    You have to find two numbers in that list that add up to the target number.
    You need to tell which position(index) those two numbers are at.

    EX
    if the list id [2,7,11,15] and the target is 9 => [0,9]
        because 2 (at the index of 0) plus 7 (ad the index of 1) equals 9.
*/

const targetNumber = (array,target) => {
    for (let i = 0; i < array.length; i++) {
       for (let j = i; j < array.length; j++) {
            //console.log(array[j]);
            if(array[i] + array[j] === target){
                return [i, j]
            }
        }
    }
    return []
}

const res = targetNumber([2,7,11,15], 9)
const res2 = targetNumber([1,3,7,9,2], 11)
console.log(res);
console.log(res2);
