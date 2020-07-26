function solve() {
  document.querySelector('#quizzie').addEventListener('click', onClick);
  
  const sections = Array.from(document.querySelectorAll('#quizzie section'));
  const result = document.querySelector('#results');

  const correctAns = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let rightAnswers = 0;
  let clicks = 0;


  function onClick(e) {
    const currSection = sections[clicks];
    const nextSection = sections[clicks + 1];
    const answer = e.target.textContent;

    
    if (e.target.className === 'answer-text') {

      if (correctAns.includes(answer)) {
        rightAnswers++;
      }
      //with attribute setter 
      //currSection.setAttribute('class', 'hidden');

      currSection.style.display = 'none'

      if(nextSection !== undefined){
        //with attribute remover
        //nextSection.removeAttribute('class');
        nextSection.style.display ='block';

      }else{
        result.style.display = 'block';
        if(rightAnswers === 3){
          result.querySelector('h1').textContent = "You are recognized as top JavaScript fan!"
        }else{
          result.querySelector('h1').textContent = `You have ${rightAnswers} right answers`
        }  
        
      }
      clicks++;
      
    }
  }
}
