function triangleArea(sideA, sideB, sideC){
    let p = 1/2 *(sideA + sideB + sideC);
    let area = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
    console.log(area);
}
triangleArea(3,4,5)