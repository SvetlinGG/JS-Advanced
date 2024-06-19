function piece(arr, flavor1, flavor2){

    let newArr = arr.slice(arr.indexOf(flavor1), arr.indexOf(flavor2) + 1);
    return newArr
    
    
}
piece(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');