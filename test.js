function test(input){
    let result = 1;

    for (let i = 1; i <= input; i++) {
        let currNum = i;
       
        result *= currNum;
        
    }

    console.log(result)
}test(3)