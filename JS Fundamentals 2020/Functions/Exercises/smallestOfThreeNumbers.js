function smallestNumber(a, b, c) {
    let smallestNum = c;

    if (a <= b && a <= c) {
        smallestNum = a;
    } else if(b <= a && b <= c){
        smallestNum = b
    }
    console.log(smallestNum);
}
smallestNumber(2,5,9)