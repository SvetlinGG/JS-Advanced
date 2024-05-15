function square(input){
    
    let num = Number(input);
    let toPrint = ' *'.repeat(num)
    for ( let i=1; i<=num; i++){
        console.log(toPrint);
    }

}
square(5);
