function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;

    for (i = 1; i <= n; i++){
        let currentNumber = Number(input[i]);
        if(currentNumber < 200){
            c1++;
        }else if(currentNumber >=200 && currentNumber <400){
            c2++;
        }else if(currentNumber >=400 && currentNumber < 600){
            c3++;
        }else if(currentNumber >=600 && currentNumber < 800){
            c4++;
        }else{
            c5++;
        }
    }
    p1 = c1 / n *100;
    p2 = c2 / n *100;
    p3 = c3 / n *100;
    p4 = c4 / n *100;
    p5 = c5 / n *100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
    
}
histogram([
    '7',   '800',
    '801', '250',
    '199', '399',
    '599', '799'
  ])