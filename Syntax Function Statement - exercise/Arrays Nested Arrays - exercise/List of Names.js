function list(arr){

    let sorting = arr.sort((a, b) => a.localeCompare(b) || a.length - b.length);
    for ( let i=0; i < sorting.length; i++){
        console.log(`${i+1}.${sorting[i]}`);
    }

}
list(["John", "Bob", "Christina", "Ema"])