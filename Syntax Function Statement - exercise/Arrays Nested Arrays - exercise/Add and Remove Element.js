function remove(commands){
    let count = 1;
    for ( let command of commands){

        if (command === 'add'){
            count ++;
        }else {
            count --;
        }
    }
    console.log(count);

}
remove(['add', 
'add', 
'add', 
'add']);
remove(['add', 
'add', 
'remove', 
'add', 
'add']
)