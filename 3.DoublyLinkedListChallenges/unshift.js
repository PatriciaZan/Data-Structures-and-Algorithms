// 1. Create a new Node
// 2. Move the pointer to the next node
// 3. Point the head to the new node


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

    unshift(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        // point the new node to the head
        newNode.next = this.head;
        // point the used to be head to point to the new node
        this.head.prev = newNode;
        // point the head to the new node
        this.head = newNode;
        this.length++;
        return this;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

myDoublyLinkedList.unshift(100)

console.log(myDoublyLinkedList);