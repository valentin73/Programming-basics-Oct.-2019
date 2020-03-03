function dungeonestDark(dungeonRooms) {
    let string = String(dungeonRooms);
    let stringToArray = string.split("|");
    let health = 100;
    let coinsCounter = 0;
    let isDead = false;
    let bestRoom = 0;
    for (let i = 0; i < stringToArray.length; i++) {
        let currentRoom = stringToArray[i].split(' ');
        let roomType = currentRoom[0];
        let roomValue = Number(currentRoom[1]);
        if(isDead){
            break;
        }
        switch (roomType) {
            case ("potion"): {
                let healedHP =health + roomValue;
                if(healedHP >= 100){
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                }else{
                    console.log(`You healed for ${roomValue} hp.`);
                    console.log(`Current health: ${healedHP} hp.`);
                    health = healedHP;
                }
                break;
            }
            case ("chest"): {
                console.log(`You found ${roomValue} coins.`);
                coinsCounter += roomValue;
                break;
            }
            default: {
                health -= roomValue;
                if (health > 0) {
                    console.log(`You slayed ${roomType}.`);
                } else {
                    console.log(`You died! Killed by ${roomType}.`);
                    isDead = true;
                    bestRoom = i + 1;
                    break;
                }
               break;
            }
    
        }
    }
    if (isDead) {
        console.log(`Best room: ${bestRoom}`);
        
    } else {
        console.log("You've made it!");
        console.log(`Coins: ${coinsCounter}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark('horse 20|cat 20|potion 20|orc 50|chest 0|potion 10|chest 1111110');