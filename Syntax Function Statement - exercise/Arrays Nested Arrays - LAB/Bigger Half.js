function bigger(arr){
    
   let sorted = arr.sort((a, b) => a-b).slice(arr.length /2);
   return sorted
}
bigger([4, 7, 2, 5]);
bigger([3, 19, 14, 7, 2, 19, 6]);