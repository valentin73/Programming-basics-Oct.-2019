function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const list = Array.from(document.querySelectorAll('td:last-child'));
    const result = document.querySelector('#result')
    const inputValue = input.value;

    const deletedTd = list.find((td) => {
        return td.textContent === inputValue;
    })
    if(deletedTd !== undefined){
        deletedTd.parentElement.remove()
        result.textContent = 'Deleted.'
    }else{
        result.textContent = 'Not found.'
    }
    
    input.value = '';
   
}