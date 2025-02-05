// 1. Create new node
// 2. point prev pointer to new node
// 3. pointer from new node to prev node
// 4. point tail to new node

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
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
console.log(myDoublyLinkedList);
