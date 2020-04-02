function houseParty(whoIsComing) {
    let comingGuests = [];

    for (let currentString of whoIsComing) {
        let currentGuest = currentString.split(' ')[0];
        if (!(currentString.includes('not'))) {
            if (comingGuests.includes(currentGuest)) {
                console.log(`${currentGuest} is already in the list!`);
            } else {
                comingGuests.push(currentGuest)
            }
        }else{
            if (comingGuests.includes(currentGuest)) {
                let index = comingGuests.indexOf(currentGuest);
                comingGuests.splice(index, 1)
            } else {
                console.log(`${currentGuest} is not in the list!`);
            }
        }
    }
    for(let name of comingGuests){
        console.log(name);
    }
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)