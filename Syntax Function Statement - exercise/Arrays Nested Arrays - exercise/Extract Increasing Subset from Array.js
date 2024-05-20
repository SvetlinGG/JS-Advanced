function extract(input){

    let result = [input[0]];
    let minNum = input[0];

    for ( let element of input){

        if ( element > minNum){
            result.push(element);
            minNum = element;
        }
    }
    return result;
    
}
console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]));