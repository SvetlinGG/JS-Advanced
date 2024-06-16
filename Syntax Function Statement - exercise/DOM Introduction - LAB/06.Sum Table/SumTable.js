function sumTable() {
let price = 0;
let row = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
let totalSum = document.getElementById('sum');
for ( let num of row){
    let items = Number(num.textContent);
    price += items;
}
    totalSum.textContent = price;

}