function subtract() {

    let firstNum = document.getElementById('firstNumber');
    let secondNum = document.getElementById('secondNumber');
    let numA = Number(firstNum.value);
    let numB = Number(secondNum.value);
    let result = numA - numB;
    let sum = document.getElementById('result');
    sum.textContent = result

    
}