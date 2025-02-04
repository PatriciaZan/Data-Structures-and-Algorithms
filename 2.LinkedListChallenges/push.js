// Will add new node to the end os the linkedlist
// Move the tail and reference the new node

class Node {
    constructor(value){
        this.head = value // first element
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)
        // In case you don't have nodes/head
        if(!this.head){
           this.head = newNode 
           this.tail = newNode
        }
        //
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(20)
myLinkedList.push(30)
console.log(myLinkedList);
