// 1. create node

class Node {
    constructor(value){
        this.value = value;
        // 2. Create markers or pointers
        this.left = null;
        this.right = null;
    }
}
//3. Create class for BST 
class BST {
    constructor(){
        this.root = null;
    }
}

const tree = new BST();
console.log(tree);
