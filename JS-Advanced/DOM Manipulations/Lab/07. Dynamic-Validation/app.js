function validate() {
    const input = document.getElementById('email');

    const emailTemplate = /^[a-z\.-]+@[a-z]{2,6}.[a-z]{2,3}/
    input.addEventListener('change', changeEmail);

    function changeEmail() {
        input.classList.remove('error')
        const inputValue = input.value;
        
        if (!inputValue.match(emailTemplate)) {
            input.classList.add('error')
            
        }
    }

}