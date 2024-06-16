function colorize() {

    let selectName = document.querySelectorAll('table tr:nth-child(even)');
    for ( let element of selectName){
        element.style.backgroundColor = 'LightBlue';
    }
}