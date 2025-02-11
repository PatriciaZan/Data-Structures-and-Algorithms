const groceries = ['milk', 'bread', 'eggs', 'flours', 'cheese', 'sugar']

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if(groceries[i] === item){
            console.log(`Item = ${item}`);    
        }
    }

    // second loop
    for (let j = 0; j < groceries.length; j++) {
        if(groceries[i] === item)
            console.log(`Item 2: ${item}`);
    }
}

// n + n = 2n or O(2n) -> remove the constant => 'O(n)'

searchForItem('eggs')