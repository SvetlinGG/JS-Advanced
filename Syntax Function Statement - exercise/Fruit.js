function fruit(fruit,weight, price){
    let kilo = (weight/1000).toFixed(2);
    let sum = (kilo * price).toFixed(2);
    console.log(`I need $${sum} to buy ${kilo} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);