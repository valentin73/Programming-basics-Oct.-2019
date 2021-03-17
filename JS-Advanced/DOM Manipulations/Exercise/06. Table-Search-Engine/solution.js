function solve() {
   const searchField = document.querySelector('#searchField');
   const tbody = document.querySelector('tbody');
   document.querySelector('#searchBtn').addEventListener('click', search);

   function search(e){
      const searchingFor = searchField.value.trim();
      const rows = Array.from(tbody.rows);
      
      rows.forEach(d => {
         if(d.textContent.toLocaleLowerCase().includes(searchingFor.toLocaleLowerCase())){
            d.classList.add('select')
         }else{
            d.classList.remove('select')
         }
      })

      searchField.value = '';
   }

}