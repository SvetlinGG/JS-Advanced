function sayHi(obr,name){
    console.log(`Hello ${obr}${name}, my name is ${this.name}!`);

}
let newContext = {
    name: 'Marijka',
}
sayHi.call(newContext,'Mr.', 'Pesho');

// Use apply
sayHi.apply(newContext,['Mr.','Gosho']);

// use bind
const modFunction = sayHi.bind(newContext);
modFunction('Mr.','Gosho');
