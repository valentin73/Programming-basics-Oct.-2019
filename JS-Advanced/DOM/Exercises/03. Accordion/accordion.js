function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extraDiv = document.getElementById('extra');
    
    const buttonContent = button.textContent;

    if(buttonContent === 'More'){
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    }else{
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}