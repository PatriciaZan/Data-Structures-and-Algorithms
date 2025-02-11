// Create a Node 

class Node {
    constructor(value){
        this.head = value // first element
        this.next = null;
    }
}


// Create a Linked List
class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
}

// Create instance of these

const myLinkedList = new LinkedList(1)
console.log(myLinkedList);

