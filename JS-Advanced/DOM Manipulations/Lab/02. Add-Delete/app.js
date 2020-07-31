function addItem() {
    const input = document.getElementById('newText');
    const items = document.getElementById('items');
    const inputValue = input.value;

    if(inputValue <= 0){
        return;
    }

    const newLi = document.createElement('li')
    newLi.textContent = inputValue;
    items.appendChild(newLi)

    const remove = document.createElement('a');
    const removeText = document.createTextNode('[Delete]');
    remove.href = '#';

    remove.appendChild(removeText);
    newLi.appendChild(remove)

    remove.addEventListener('click', removeElement);

    function removeElement(e){
        e.preventDefault()
        newLi.remove()
    }

}