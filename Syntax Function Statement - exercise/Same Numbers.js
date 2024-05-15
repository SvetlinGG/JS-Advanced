function same(input){

    const numberToString = String(input)
    console.log(new Set(numberToString.split('')).size === 1)
    console.log(eval(numberToString.split('').join('+')))

}
same(2222222);
same(1234);