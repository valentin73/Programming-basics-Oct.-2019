function create(words) {
   const content = document.querySelector('#content')
   words.forEach(str => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = str;
      p.style.display = 'none'

      div.appendChild(p);
      div.addEventListener('click', onClick)
      content.appendChild(div)
      
   });
   

   function onClick(e){
      e.target.children[0].style.display = 'block'

   }
   
}