function sum(num1, num2){
    let sum = 0;
    for ( let i=Number(num1); i <= Number(num2); i++){
        sum += i;
    }
    console.log(sum);

}
sum('1', '5' );
sum('-8', '20' );