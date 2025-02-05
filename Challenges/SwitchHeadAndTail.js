class Node {
    constructor(value){
        this.head = value;
        this.tail = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode

    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp; // temp points to head
        let prev = null; // new pointer that points to null

        for(let i = 0; i< this.length; i++){
            next = temp.next;
            temp.next = prev; // reverse the pointer
            prev = temp; 
            temp // makes the temp to next node
        }
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)

myLinkedList.reverse();

console.log(myLinkedList);