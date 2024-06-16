function solution(number){

    return (newNumber) => newNumber + number;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));