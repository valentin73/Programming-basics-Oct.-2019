function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', onClick);
    const selectMenu = document.querySelector('#selectMenuTo');

    const binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.setAttribute('value','binary')

    const hexadecimal = document.createElement('option')
    hexadecimal.textContent= 'Hexadecimal';
    hexadecimal.setAttribute('value','hexadecimal')

    selectMenu.appendChild(binary);
    selectMenu.appendChild(hexadecimal);

    const result = document.querySelector('#result');


    function onClick(){
        const input = document.querySelector('#input');
        let inputValue = Number(input.value);
        
        const convertionValue = document.querySelector('#selectMenuTo').value;
        
        if(convertionValue === 'binary'){
            let binaryNumber = inputValue.toString(2);
            result.value = binaryNumber
            
        }else{
            let hexadecimalNumber = inputValue.toString(16).toUpperCase()
            result.value = hexadecimalNumber
        }
    }
}