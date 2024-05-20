function sorting(arr){
    let numArr = [];
    let sorted = arr.sort((a, b)=> b - a);
    for ( let i=0; i < sorted.length; i++){
        if ( i % 2 === 0){
            let smallest = sorted.pop();
            sorted.splice(i, 0, smallest);
            
        }
    }
    return sorted;

}
 console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))