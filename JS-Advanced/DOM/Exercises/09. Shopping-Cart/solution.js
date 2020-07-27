function solve() {
   document.querySelector('.shopping-cart').addEventListener('click',addToCard);
   document.querySelector('.checkout').addEventListener('click',checkOut);
   const textArea = document.querySelector('textarea');

   let totalPrice = 0;
   let totalProducts = [];

   function addToCard(e){
      if(e.target.className === 'add-product'){
         const currentButtonPressed = e.target.parentNode.parentNode;
         const currentProduct = currentButtonPressed.querySelector('.product-details .product-title').textContent;
         const currentPrice = currentButtonPressed.querySelector('.product-line-price').textContent;

         totalPrice += Number(currentPrice);
         
         if(totalProducts.includes(currentProduct) == false){
            totalProducts.push(currentProduct);
         }

         textArea.textContent += `Added ${currentProduct} for ${currentPrice} to the cart.\n`;
         
      }

   }
   
   function checkOut(){
      textArea.textContent += `You bought ${totalProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      const addButtons = Array.from(document.querySelectorAll('button'));

      addButtons.forEach(btn =>{
         btn.disabled = true
      })
      
   }

}