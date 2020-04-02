function sorting(numbers = []){
    let resultArray = [];
    let counter = 0
    
    while(numbers.length > 0) {
        if(counter % 2 === 0 ){
            numbers.sort((a,b) => b - a);
            resultArray.push(numbers.shift());
        }else{
            numbers.sort((a,b) => a - b);
            resultArray.push(numbers.shift());
        }   
        counter++
        
    }
    console.log(resultArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])