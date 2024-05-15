function agregate(arr){
    let sum = 0;
    let inverse = 0;
    for ( let i=0; i < arr.length; i++){
        sum += arr[i]; 
        inverse += 1/arr[i]    
    }
    let str = arr.map(n => n.toString());
    
    console.log(sum);
    console.log(inverse);
    console.log(eval(str.join('')));

}
agregate([2, 4, 8, 16])