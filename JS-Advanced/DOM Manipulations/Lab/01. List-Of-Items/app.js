function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items')
    const inputValue = input.value;

    const newLi = document.createElement('li');
    newLi.textContent = inputValue

    items.appendChild(newLi)

    input.value = '';
}