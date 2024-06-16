// Function decomposition
function sum3(a){
    return(b) =>{
        return(c) => {
            return a + b + c
        }
    }
}
const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3));
const currySum = a => b => c => a+b+c;
console.log(currySum(1)(2)(3));
