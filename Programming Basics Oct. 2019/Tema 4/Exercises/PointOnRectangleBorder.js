function pointOnBorder(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    
    
    if((x === x1 || x ===x2) && (y1<= y && y2>=y )){
        console.log("Border");
        
    }else if((y === y1 || y ===y2) && (x1<= x && x2>=x )){
        console.log("Border");
    }else{
        console.log("Inside / Outside");
        
    }

    
}   pointOnBorder([ '2', '-3', '12', '3', '1', '3' ])
