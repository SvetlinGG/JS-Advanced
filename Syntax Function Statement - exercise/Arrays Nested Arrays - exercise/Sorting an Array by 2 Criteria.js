function sorting(input){

    let sorting = input.sort((a, b) => a.length - b.length) || a.localeCompare(b);
    for ( let names of sorting){
        console.log(names);
    }
}
sorting(['test', 
'Deny', 
'omen', 
'Default']);