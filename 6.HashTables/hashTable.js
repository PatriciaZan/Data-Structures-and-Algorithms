// 1. Write a class or function
class Hashtable {
    constructor(size = 6){
        this.keyMap = new Array(size);
    }

    _hashFunction(key){
        let sum = 0
        const PRIME_NUMBER = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
           const charCode = key.charCodeAt(0) - 96;
           sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }

        return sum;
    }

    set(key, value){
        const index = this._hashFunction(key);
        console.log(index);
        
        if(!this.keyMap[index]){
            this.keyMap = []
        }

        this.keyMap[index].push([key, value])
        return this
    }
}

const phoneBook = new Hashtable()
phoneBook.set('john', '555-333-444')