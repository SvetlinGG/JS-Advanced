function sum(arr){
    arr = arr.map(Number);
    console.log( arr.shift() + arr.pop())
}
sum(['20', '30', '40'])