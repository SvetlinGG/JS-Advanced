function circle(input){
    let type = typeof(input);
    let result = (Math.PI * Math.pow(input, 2)).toFixed(2);
    if ( type === 'number'){
        console.log(result);
    }else {
        
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }


}
circle(5);
circle('name');