function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    let output = "";
    
    for(let i = floor; i >0; i--){
        output = "";
        for(let a = 0; a <room; a++){
            if(i === floor){
                output += `L${i}${a} ` ;
                
            }else if (i % 2 ==0){
                output += `O${i}${a} `;
            }else{
                output += `A${i}${a} `
            }
        }
        console.log(output);
    }
    

}
building(['6', '4'])