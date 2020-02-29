function heartDelivery(arrayOfCommands = []) {
    let stringToArray = arrayOfCommands[0].split('@');
    let arrayOfNumbers = [];

    stringToNumber(stringToArray)
    function stringToNumber(array) {
        for (let i = 0; i < array.length; i++) {
            let currentElement = Number(array[i]);
            arrayOfNumbers.push(currentElement);
        }
    }

    let currentCommand = '';
    let currentHouseIndex = 0;
    let houseCurrentHearts = 100;
    let allSuccess = true;
    let successfulHouses = 0
    while (currentCommand !== 'Love!') {
        for (let i = 1; i < arrayOfCommands.length; i++) {
            currentCommand = arrayOfCommands[i];
            let splittedCommand = currentCommand.split(' ')
            let commandType = splittedCommand[0];
            let jumpLength = Number(splittedCommand[1]);
            
            if(commandType === "Jump"){
                currentHouseIndex += jumpLength
                if(currentHouseIndex >= arrayOfNumbers.length){
                    currentHouseIndex = 0;
                }
                houseCurrentHearts = arrayOfNumbers[currentHouseIndex] - 2;
                if(houseCurrentHearts <= -2 ){
                    console.log(`Place ${currentHouseIndex} already had Valentine's day.`);
                    
                }
            
                arrayOfNumbers[currentHouseIndex] = houseCurrentHearts
                if(houseCurrentHearts === 0 ){
                    console.log(`Place ${currentHouseIndex} has Valentine's day.`);
                }
               

            }

        }
        for(let number of arrayOfNumbers){
            if(number > 0){
                allSuccess = false;

            }else{
                successfulHouses++
            }
        }
        
    
    }
    console.log(`Cupid's last position was ${currentHouseIndex}.`);
    if(allSuccess=== true){
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid has failed ${arrayOfNumbers.length - successfulHouses} places.`);
    }
    

}
heartDelivery([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])