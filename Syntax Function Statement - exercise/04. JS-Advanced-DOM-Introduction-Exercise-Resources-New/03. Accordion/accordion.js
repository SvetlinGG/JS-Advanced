function toggle() {
    let btn = document.querySelector('.button');
    let text = document.getElementById('extra');

    if ( btn.textContent == 'More'){

        text.style.display = 'block';
    }else {
        text.style.display = 'none';
    }
    btn.textContent = btn.textContent == 'More'?'Less':'More';
    
}