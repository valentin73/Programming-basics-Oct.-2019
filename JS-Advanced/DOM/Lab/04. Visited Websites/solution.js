function solve() {
  const anchors = Array.from(document.querySelectorAll('a'));
  const counters = anchors.map(el => Number(el.nextElementSibling.innerText.split(' ')[1]));
  const container = document.querySelector('#page1 > .middled');

  container.addEventListener('click', function(e){
    const target = e.target;
    const parent = e.target.parentElement;

    const notAnchor = target.localName !== 'a';
    const notParent = parent.localName !== 'a';

    if(notAnchor && notParent){
      return;
    }

    const targetCounter = notAnchor? parent : target;
    const counterIndex = anchors.indexOf(targetCounter);

    if(counterIndex === -1){
      return;
    }
    counters[counterIndex]++;
    const paragraph = targetCounter.nextElementSibling;
    paragraph.innerText = `visited ${counters[counterIndex]} times`;
  })
}


// function solve() {
//   const anchors = Array.from(document.querySelectorAll('a'));
//   const counters = new Array(anchors.length).fill(0);
//   const container = document.querySelector('#page1 > .middled');

//   container.addEventListener('click', function(e){
//     const target = e.target;
//     const parent = e.target.parentElement;

//     const isSpan = target.localName === 'span';
//     const isAnchor = parent.localName === 'div';
//     if(isSpan || isAnchor){
//     const counterIndex = anchors.indexOf(isSpan ? target : parent)
//     console.log(counterIndex);
//     }else {return}
//   })
// }