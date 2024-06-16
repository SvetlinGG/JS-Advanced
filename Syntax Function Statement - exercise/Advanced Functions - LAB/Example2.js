function sayHi(){

    console.log(`Hello my name is ${this.name}!`);
}
//Invoke global function
this.name = 'Gosho'; // <- undefined
sayHi();

// Invoke method

let person = {
    name: 'Pesho',
    sayHi
};
person.sayHi();
// Invoke as inner function of method
let anotherPerson ={
    name: 'Stamat',
    saySomething(){
        sayHi();
    }
};
anotherPerson.saySomething()
// Invoke as inner arrow fucntion

let person2 = {
    name: 'Georg',
    saySomething(){
        let sayHiArrow =() =>console.log(`Hello my name is ${this.name}!`);
        sayHiArrow();
    }
}
person2.saySomething();
// Use call
let newContext = {
    name: 'Marijka',

};
sayHi.call(newContext);




