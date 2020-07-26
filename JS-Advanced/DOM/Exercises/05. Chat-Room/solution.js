function solve() {
   document.querySelector('#send').addEventListener('click', onClick);
   const myMessages = document.querySelector('#chat_messages')

   function onClick(){
      const input = document.querySelector('#chat_input');
      const inputValue = input.value;

      const newMessage = document.createElement('div');
      newMessage.setAttribute('class','message my-message')
      newMessage.innerText = inputValue;

      myMessages.appendChild(newMessage);
      
      input.value = ''
   }

}


