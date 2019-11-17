function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
   

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
  
    for (i = 1; i <= n; i++){
        let currentNumber = Number(input[i]);
        if(currentNumber % 2 === 0){
            c1++;
        }
        if(currentNumber % 3 === 0){
            c2++;
        }
        if(currentNumber % 4 ===0){
            c3++;
        }
    }
    p1 = c1 / n *100;
    p2 = c2 / n *100;
    p3 = c3 / n *100;
  
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
   
}