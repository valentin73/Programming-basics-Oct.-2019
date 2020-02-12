function distanceBetweenPoints(x1,y1,x2,y2){
    let distance = 0;
    let sideOne = 0;
    let sideTwo = 0;
    sideOne = Math.abs(y1) + Math.abs(y2);
    sideTwo= (x1) - (x2);
    sideTwo = Math.abs(sideTwo);
    if(y1 !== y2 && (y2 !== 0 || y1 !== 0) && x1 !== x2){
      distance = sideOne **2 + sideTwo ** 2;
      distance =  Math.sqrt(distance);
    }else if(y1 === 0 && y2 === 0 || (y1 === y2)){
        distance = sideTwo;
    }else if(x1 === 0 && x2 === 0 || (x1 === x2)){
      sideOne = y1 - y2;
      sideOne = Math.abs(sideOne)
      distance = sideOne
    }
    console.log(distance);
    
}
distanceBetweenPoints(0,13,0,27)