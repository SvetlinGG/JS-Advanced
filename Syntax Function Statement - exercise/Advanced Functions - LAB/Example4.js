
function execute(operation , operandA , operandB){
    let result = operation(operandA,operandB);
    console.log(result);
}
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
execute(sum, 10, 20)
execute(subtract, 10, 20)

// Higher order function
function greetingBuilder(salutation, title){
    return (name) => {
        console.log(`${salutation} ${title} ${name}`);

    }
    
}
const formalGreeting = greetingBuilder('Hello', 'Mr.');
formalGreeting('Peter');
const informalGreeting = greetingBuilder('Maraba','brato')
informalGreeting('Georgi')
//Predicat function

function isOdd(number){
    return number %2 !== 0;
}
isOdd(3)
// Referential Transparency
function add(a, b){
    return a + b
};
function mult(a, b) {
    return a * b
};
const x =  add(2,mult(3, 4));
console.log(x);

