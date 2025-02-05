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

    getLast(){
        if(!this.head){
            return null
        }

        let temp = this.head
        
        while(temp){
            if(!temp.next){
                return temp
            }
                // keep searching
            temp = temp.next
        }
    }

    get(index){
        let counter = 0
        let temp = this.head

        while(temp){
            if(counter === index){
                return temp
            }

            counter++
            temp = temp.next
        }
        return null
    }

    set(index, value){
       let temp = this.get(index)
       //console.log(temp);
       
       if(temp){
        temp.value = value 
        return true
       }

       return false
    }

    insert(index, value){
        // will add to the beggining of the list
        if(index === 0){
            return this.unshift(value)
        }
        // will add to the end
        if(index === this.length){
            return this.push(value)
        }
        // create node
        const newNode = new Node(value)
        // access the before node
        const temp = this.get(index - 1)
        // take the pointer of new node and point to the next element
        newNode.next = temp.next
        // prev pointer must point the new node
        temp.next = newNode;
        this.length++
        return true;

    }

    size(){
        let counter = 0;
        let temp = this.head;

        while(temp){
            counter++
            temp = temp.next
        }

        return counter
    }
}

const myLinkedList = new LinkedList(0)
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.size());

console.log(myLinkedList);