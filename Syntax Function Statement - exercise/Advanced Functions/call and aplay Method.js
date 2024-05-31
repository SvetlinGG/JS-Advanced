function sayHi(obr,name){
    console.log(`Hello ${obr}${name} my name is ${this.name}`);

}

// use call
let newContext = {
    name: 'Marijka',
    
};

sayHi.call(newContext, 'Mr.','Pesho');

// Use apply

sayHi.apply(newContext,['Mr.','Gosho']);

//Use bind.

const modifiedSayHi = sayHi.bind(newContext);
modifiedSayHi('Mr.','Garabedyan');
const f = (function () {
    let counter = 0;
    return function () {
    console.log(++counter);
    }
    })(1);