// 1. Add new value (node) to the beggining
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value)
        //  if Stack is null
        if(this.length  === 0){
            this.first = newNode
        }

        newNode.next = this.first
        this.first = newNode
        this.length++
        return this;
    }
}

let theStack = new Stack(0)
theStack.push(1)
theStack.push(2)

console.log(theStack);