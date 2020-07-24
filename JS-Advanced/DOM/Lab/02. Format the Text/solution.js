function solve() {
  const text = document.getElementById('input');
  const output = document.getElementById('output');
  const sentences = Array.from(text.innerText.split('.'));
  const formatted = [];

  const paragraph = [];
  let counter = 0
  sentences.forEach(element => {
    counter++;
    if (element.length >= 1) {
      paragraph.push(element)
    }
    if (paragraph.length === 3) {
      formatted.push(paragraph.join('. ') + '.')
      paragraph.splice(0, 3)
    }
    if(counter === sentences.length){
      if(paragraph.length > 0 ){
        formatted.push(paragraph.join('. ') + '.')
      }
    }
  });

  formatted.forEach(el => {
    const newPar = document.createElement('p');
    output.appendChild(newPar);
    newPar.innerText = el
    
  });

}