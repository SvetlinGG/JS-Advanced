function focused() {
    

    const inputSection = Array.from(document.querySelectorAll('input'));

     for ( let el of inputSection){
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    };

    function onFocus(e){
        e.target.parentNode.classList.add('focused')

    }

    function onBlur(e){
        e.target.parentNode.classList.remove('focused')

    }
}
