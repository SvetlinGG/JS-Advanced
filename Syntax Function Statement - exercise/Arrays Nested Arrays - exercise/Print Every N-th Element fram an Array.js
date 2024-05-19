function print(arr, num){
    let numArr =[];
    for ( let i=0; i < arr.length; i+=num){
        numArr.push(arr[i])
    }
    return numArr;
}
console.log( print(['5', 
'20', 
'31', 
'4', 
'20'], 
2));