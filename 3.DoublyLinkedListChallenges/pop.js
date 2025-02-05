// 1. Create a temp
// 2. Move the Tail to prev node
// 3. Break the chain
// 4. set the null value

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.tail;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        //Checks if the list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail = newNode;  //this.tail.next = newNode;
        newNode.prev = this.tail; 
        this.tail = newNode;

        this.length++;
        return this;
    }

    pop(){
        // checks if list have nodes
        if(this.length === 0){
            return undefined;
        }

        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

console.log(myDoublyLinkedList.pop());