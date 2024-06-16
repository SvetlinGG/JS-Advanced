function sayHi(name, obr){
    console.log(`Hello ${obr}${name} my name is ${this.name}!`);
}
let newContext = {
    name: 'Marijka',
};
sayHi.call(newContext,'Pesho','Mr.')

sayHi.apply(newContext, ['Gosho','Mr.'])


