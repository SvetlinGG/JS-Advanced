function sequence(n, k){;
    let newArr = [1];
    for ( let i=1; i <= n-1; i++){
        newArr.push(i)
    }
    for ( let i=2; i < newArr.length; i++){
        console.log(i);
    }
}
sequence(6, 3);
//sequence(8, 2);
