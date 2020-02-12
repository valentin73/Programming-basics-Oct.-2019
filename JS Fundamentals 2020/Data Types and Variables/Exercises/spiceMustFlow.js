function spiceMustFlow(startingSpice){
    let daysCounter = 0;
    let totalSpice = 0;
    for (let currentSpice = startingSpice ;currentSpice >=100; currentSpice-= 10) {
        totalSpice += currentSpice - 26;
        daysCounter++;
    }
    totalSpice -= 26
    if(totalSpice < 0){
        totalSpice = 0;
    }
    console.log(daysCounter);
    console.log(totalSpice);
}
spiceMustFlow(11)