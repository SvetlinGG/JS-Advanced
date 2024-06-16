function sayHi(obr,name){
    console.log(`Hello ${obr}${name} my name is ${this.name}`);

}

// use call
let newContext = {
    name: 'Marijka',
    
};

sayHi.call(newContext, 'Mr.','Pesho');