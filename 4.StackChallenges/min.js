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
        if(this.length  === 0){
            this.first = newNode
        }
        newNode.next = this.first
        this.first = newNode
        this.length++
        return this;
    }
    min(){
        if(this.length === 0){
            return undefined;
        }
        let current = this.first;
        let minValue = current.value;

        while(current.next){
            current = current.next;

            if(current.value < minValue){
                //console.log(current.value, minValue);
                minValue = current.value;
            }
        }
        return minValue;
    }
}

let theStack = new Stack()

theStack.push(1)
theStack.push(2)
theStack.push(3)

console.log(theStack);
console.log(theStack.min())