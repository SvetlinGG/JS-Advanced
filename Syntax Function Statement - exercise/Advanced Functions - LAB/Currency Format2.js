function createFormatter(separator, symbol, symbolFirst, value){
    return currency.bind(null,separator, symbol, symbolFirst, value,currency);


}
const formatterBg = createFormatter('$','.', true)
function currency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
const result = currency('.','$',false,5345);

console.log(result);


