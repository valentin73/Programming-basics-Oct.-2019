function solve() {
    const anchors = Array.from(document.querySelectorAll('a'));
    //const counters = anchors.map(el => Number(el.split(' ')[1]))
    const container = document.querySelector('#page1 > .middled');
  
    container.addEventListener('click', function(e){
      const target = e.target;
      const parent = e.target.parentElement;
  
      const notAnchor = target.localName !== 'a';
      const notParent = parent.localName !== 'a';
      if(notAnchor && notParent){return}
      const counterIndex = anchors.indexOf(notAnchor? parent : target)
      console.log(counterIndex);
    })
  }