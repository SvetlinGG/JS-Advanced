function createFormatter(separator, symbol, symbolFirst, value) {
    return currency.bind(null, separator, symbol, symbolFirst, value)

}
const bgFormatter = createFormatter(',', 'лв.', true);
console.log(bgFormatter(20));
console.log(bgFormatter(15));
function currency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
const result = currency('.', 'лв.', false, 10)
console.log(result);