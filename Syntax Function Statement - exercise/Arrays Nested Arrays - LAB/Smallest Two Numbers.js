function smallest(arr){
    let minNum = Math.min(...arr);
    arr.splice(arr.indexOf(minNum), 1);
    console.log(minNum, Math.min(...arr));

}
smallest([30, 15, 50, 5])