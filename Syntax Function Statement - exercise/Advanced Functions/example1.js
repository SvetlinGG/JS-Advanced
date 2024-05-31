function sayHi(){
    
    console.log(`Hello , my name is ${this.name}`);

}
// invoke global function
sayHi();
let person = {
    name: 'Svetlin',
    sayHi,
};
person.sayHi();
// Invoke as inner function of method

let anotherPerson ={
    name: 'Stamat',
    saySomething(){
        sayHi();
    }
}
anotherPerson.saySomething();
// Execute as event listener ( this must be executed in browser)

setTimeout(sayHi,5000)

// invoke as inner arrow function of method.

let person2 = {
    name: 'Georg',
    saySomething(){
    let sayHiArrow = ()=> console.log(`Hello my name is ${this.name}!`);  
    sayHiArrow(); 
    }
}
person2.saySomething();

