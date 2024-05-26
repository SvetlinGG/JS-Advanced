function calc() {
    
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let sum = document.getElementById('sum')
    let numOne = Number(firstNum.value);
    let numTwo = Number(secondNum.value);
    sum.value = numOne + numTwo;
    
    
}
