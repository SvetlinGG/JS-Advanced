function sumTable() {
let price = 0;
let rows = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
let totalSum = document.getElementById('sum');
for ( let num of rows){
    let item = Number(num.textContent);
    price += item;
}
totalSum.textContent = price;

}