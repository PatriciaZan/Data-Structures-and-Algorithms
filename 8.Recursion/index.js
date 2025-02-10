function countDown(number){
    // prevent infinit loop
    if(number === 0){
        return;
    }

    console.log(number);
    countDown(number - 1);
}

//countDown(5);

// -----------------------------------

function fatorial(number){
    // if(number === 0){
    //     return 1;
    // }
    // return number * fatorial(number - 1)

    return number === 0 ? 1 : number * fatorial(number - 1);
}

console.log(fatorial(5));
