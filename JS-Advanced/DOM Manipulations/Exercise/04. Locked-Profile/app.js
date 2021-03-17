function lockedProfile() {
    document.querySelector('#main').addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;
            const radioUnlock = parent.querySelector('input[type="radio"][value="unlock"]');
            if (radioUnlock.checked) {
                const user = parent.querySelector('div');
                if(user.style.display !== 'block'){
                    user.style.display = 'block'
                    e.target.textContent = 'Hide it'
                }else{
                    user.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
                
            }
        }

    }

}