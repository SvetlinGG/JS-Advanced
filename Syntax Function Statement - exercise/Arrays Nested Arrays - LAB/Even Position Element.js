function position(input){
    let newArr = [];
    for ( let i=0; i< input.length; i++){
            
        if ( i % 2 == 0){
            newArr.push(input[i]);
        }
    }
    console.log(newArr.join(' '));

}
position(['20', '30', '40', '50', '60']);
position(['5', '10']);