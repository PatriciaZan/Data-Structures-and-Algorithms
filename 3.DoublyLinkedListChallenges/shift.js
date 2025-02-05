// 1. take the head and point to the next node
// 2. break the conection
// 3. remove element
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

        this.tail = newNode; 
        newNode.prev = this.tail; 
        this.tail = newNode;

        this.length++;
        return this;
    }

    pop(){
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

    unshift(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }

        let temp = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
        this.head.prev = null; // ??
        temp.next = null;
        this.length--;
        return temp;

    }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

myDoublyLinkedList.shift();

console.log(myDoublyLinkedList);