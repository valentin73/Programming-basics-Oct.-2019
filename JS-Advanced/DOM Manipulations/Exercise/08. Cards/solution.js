function solve() {
   const player1div = document.querySelector('#player1Div');
   player1div.addEventListener('click', firstPlayer);

   const player2div = document.querySelector('#player2Div');
   player2div.addEventListener('click', secondPlayer);

   const result = document.querySelector('#result');
   const spanOne = result.querySelector('span:first-child');
   const spanTwo = result.querySelector('span:last-child');

   const hands = [];
   const currentHand = [];

   let firstClick = false;
   let secondClick = false;

   function firstPlayer(e) {
      const target = e.target;
      if (target.nodeName === 'IMG' && firstClick !== true) {
         const currentCard = target.name;

         spanOne.textContent = currentCard;

         if(currentHand.length === 0){
            currentHand.push(currentCard);
         }else{
            currentHand.unshift(currentCard);
         }

         target.src = "images/whiteCard.jpg";
         
         firstClick = true
         if(firstClick && secondClick){
            bothSelected();
         }
         console.log(e);
      }
      
   }
   
   function secondPlayer(e) {
      const target = e.target;
      if (target.nodeName === 'IMG' && secondClick !== true) {
         const currentCard = target.name;

         spanTwo.textContent = currentCard;

         currentHand.push(currentCard);
         hands.push(currentHand);
         
         target.src = "images/whiteCard.jpg";

         secondClick = true
         if(firstClick && secondClick){
            bothSelected();
         }
      }  
   }


   function bothSelected(){
      const [firstCard, secondCard] = [currentHand[0], currentHand[1]]
      currentHand.splice(0, currentHand.length);

      if(Number(firstCard) > Number(secondCard)){
         Array.from(player1div.children).map(card => {
            if(card.name === firstCard){
               card.style.border = '2px solid green'
            }
         });

         Array.from(player2div.children).map(card => {
            if(card.name === secondCard){
               card.style.border = '2px solid red'
            }
         });
      }else{
         Array.from(player2div.children).map(card => {
            if(card.name === secondCard){
               card.style.border = '2px solid green'
            }
         });

         Array.from(player1div.children).map(card => {
            if(card.name === firstCard){
               card.style.border = '2px solid red'
            }
         });
      }

      spanOne.textContent = '';
      spanTwo.textContent = '';

      document.querySelector('#history').textContent += `[${firstCard} vs ${secondCard}] `

      firstClick = false;
      secondClick = false;
   }
}