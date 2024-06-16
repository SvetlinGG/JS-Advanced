/*let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound);
    }
}
dog.talk()
let talkFunction = dog.talk
let boundFunction =
    talkFunction.bind(dog)
talkFunction()
boundFunction()*/

// Invoke as Global function
function sayHi(){
    console.log(`Hello my name is ${this.name}!`);

}
this.name = 'Gosho'
sayHi()
// Invoke as method
let person = {
    name: 'Pesho',
    sayHi,
};
person.sayHi();
// Invoke as inner function
function outer(){
    sayHi();
}
outer();
// Invove as inner function as method
let anotherPerson ={
    name: 'Stamat',
    saySomething(){
        sayHi();
    }
}
anotherPerson.saySomething();
// Invoke as inner arrow function

let person2 = {
    name: 'Georg',
    saySomething(){
        let sayHiArrow=()=>console.log(`Hello my name is ${this.name}`);
        sayHiArrow();
    }
}
person2.saySomething();

// 
function sayHi(obr,name){
    console.log(`Hello ${obr}${name} my name is ${this.name}`);

}

// Use call
 let newContext = {
    name: 'Marijka'
 };
sayHi.call(newContext,'Mr.' ,'Pesho')

// Use apply
sayHi.apply(newContext,['Mr.' ,'Pesho']);

// Use bind
const modifiedFunction = sayHi.bind(newContext)
modifiedFunction('Mr.' ,'Pesho');




