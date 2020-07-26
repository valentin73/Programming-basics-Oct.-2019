function addItem() {
    const textInput = document.getElementById('newItemText').value;
    const itemValue = document.getElementById('newItemValue').value;
    const menu = document.getElementById('menu');

    const newOption = document.createElement('option')
    newOption.textContent = textInput;
    newOption.value = itemValue;

    menu.appendChild(newOption)

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''; 
}