// Custom Array and custom algorithms

class MyArray {
    constructor(){
        this.lenght = 0;
        this.data = {};
    }

    push(item){
        this.data[this.lenght] = item
        this.lenght++
        // console.log('______', this.data[this.lenght]); 
        //console.log('______', this.data);
        return this.lenght
    }

    get(index){
        console.log(this.data[index]);
        return this.data[index]   
    }

    pop(){
        const lastItem = this.data[this.lenght -1]
        console.log(`POP ${lastItem}`);
        delete this.data[this.lenght -1]
        this.lenght--
        return lastItem;
    }

    shift(){
        const firstItem = this.data[0]
        
        // re index the array [0,1,2,3,4]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        //delete last index

        delete this.data[this.lenght -1]
        this.lenght--
        return firstItem
    }

    delete(index){
        const item = this.data[index]

        //re index the array
        for (let i = 0; i < this.lenght; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.lenght -1]
        this.lenght--
        return item;
    }
}

const myNewArray = new MyArray()
//console.log(myNewArray.push('apple'));
myNewArray.push('apple');
myNewArray.push('orange');
myNewArray.push('mango');

//myNewArray.pop() // remove the last item of the array
//console.log(`GET ${myNewArray.get(1)}`);

console.log(myNewArray);
//console.log(`SHIFT() -> ${myNewArray.shift()}`);
console.log(myNewArray.delete(0));
console.log(myNewArray);

