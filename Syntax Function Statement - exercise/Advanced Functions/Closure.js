function outer(){

    let name = 'Pesho';
     return function(){
        let age = 28;
        console.log(name, age);
    }
    
}
const inner = outer()
inner();

// IFFE

(function solve(name){
    console.log('Hello ' + name);
})('Svetlin')
// Partial Application
 function sayHiMr(title, name){
    console.log(`Hello ${title}${name}`);
 }
//sayHi('mr.','Garabedyan')
const sayHi = (name) => sayHi('Mr.', name)
sayHiMr('Garabedyan')
