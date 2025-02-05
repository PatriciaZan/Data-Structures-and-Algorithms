// Gives the firts node

class Node {
    constructor(value){
        this.head = value; // first element
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
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

    pop(){
        // if you dan't have any head
        if(!this.head){
            return undefined;
        }

        // create prev and temp pointing to head
        let temp = this.head;
        let prev = this.head;

        while(temp.next){
            prev = temp;
            temp= prev.next;
        }

        this.tail = prev
        this.tail.next = null; // removes conection from last node
        this.length--; // decrement the list

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value){
        const newNode = new Node(value)

        // if the list is empty
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }

        newNode.next = this.head
        this.head = newNode

        this.length++
        return this;
    }

    shift(){
        if(!this.head){
            return undefined
        }

        // 1. Point the first node, store in a temporary element
        let temp = this.head
        // 2. Move head to next node
        this.head = this.head.next
        // 3. Remove the first element
        temp.next = null
        this.length--

        // don't have nodes
        if(this.length === 0){
            this.tail = null
        }

        return temp;
    }

    getFirst(){
        if(!this.head){
            return undefined
        }

        return this.head
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.pop();
myLinkedList.unshift(0)
myLinkedList.shift()
console.log('--getFirst: ',myLinkedList.getFirst())
console.log(myLinkedList);