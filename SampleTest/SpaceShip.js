function spaceShip(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let avarageAstHeight = Number(input[3]);

    let volume = width * length * height;
    let neededRoomVolume = 2 * 2 * (avarageAstHeight + 0.40);

    let astCount = volume / neededRoomVolume
    
    if(astCount >= 3 && astCount <=10){
        console.log(`The spacecraft holds ${Math.floor(astCount)} astronauts.`);
    }else if(astCount < 3) {
        console.log("The spacecraft is too small.");
        
    }else{
        console.log("The spacecraft is too big.");
        
    }
    
    
    
}spaceShip([4.5,
    4.8,
    5,
    1.75,])