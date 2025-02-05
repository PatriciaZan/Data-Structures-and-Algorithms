// Create the NODE
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Create STACK

class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode;
        this.length = 1;
    }
}

let theStack = new Stack(0)
console.log(theStack);
