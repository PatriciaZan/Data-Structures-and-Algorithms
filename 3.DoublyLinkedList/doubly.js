//1. Create a Node

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
}