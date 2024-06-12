function colorize() {

    let name = document.querySelectorAll('table tr:nth-child(2n)');

    for ( let item of name){
        item.style.backgroundColor = 'red'
    }
    
}