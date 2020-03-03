function nationalCourt(array = []) {
    let peopleAnsweredPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let hoursCounter = 0;
    let peopleLeft = array[3];
    while (peopleLeft > 0) {
        peopleLeft -= peopleAnsweredPerHour
        hoursCounter++;
        if (hoursCounter % 4 === 0 && hoursCounter !== 0) {
            hoursCounter++
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`);

}

nationalCourt([3, 2, 5, 40]);