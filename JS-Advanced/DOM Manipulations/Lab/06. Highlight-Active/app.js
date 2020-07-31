function focus() {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    inputs.forEach(el =>{
        el.addEventListener('focus', focusIn);
        el.addEventListener('blur', focusOut);
    });

    function focusIn(e){
        e.target.parentElement.classList.add('focused');
    }
    function focusOut(e){
        e.target.parentElement.classList.remove('focused');
    }
}