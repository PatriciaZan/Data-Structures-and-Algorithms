class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        // 1. create new Node
        const newNode = new Node(value);

        // 2. Check if node is empty
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let temp =this.root;

        while(true){
            if(newNode.value === temp.value){
                return undefined
            }

            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                } else{
                    temp = temp.left;
                }
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree);