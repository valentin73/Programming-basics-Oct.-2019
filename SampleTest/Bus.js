function bus(input){
    let passengers = Number(input.shift());
    let stations = Number(input.shift());

    let currentStation = 1;
    let currentPassengers = 0;
    for(let i = 0; i <2 * stations; i++){
        let exiting = Number(input[i]);
        let entering = Number(input[++i]);
        currentPassengers = passengers - exiting + entering
        if(currentStation % 2 ==0){
            currentPassengers -=2
        }else{
            currentPassengers +=2 
        }
        passengers = currentPassengers
        currentStation++
    }
    console.log(`The final number of passengers is : ${currentPassengers}`)
}
bus([20,2,10,5,5,3])