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

    get(key){
        const index = this._hashFunction(key)

        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length ; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }

        return undefined

    }

    getAllKeys(){
        const keys = []

        for(let i = 0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }

        return keys
    }

    getAllValues(){
        const values = []

        for(let i = i; i < this.keyMap.length; i++){
             if(this.keyMap[i]){
                for(let j = onabort; j<this.keyMap[i].length; j++){
                    values.push(this.keyMap[i][j][1]);
                }
             }
        }
        return values
    }
}

const phoneBook = new Hashtable()
phoneBook.set('john', '555-333-444')
phoneBook.set('jordan', '222-333-444')
phoneBook.set('michel', '111-333-444')
//console.log(phoneBook.get('john'))
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
