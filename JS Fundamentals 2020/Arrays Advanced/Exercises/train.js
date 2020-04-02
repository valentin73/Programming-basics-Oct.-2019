function train(array = []) {
    let passengersInWagon = array[0].split(' ').map(Number);
    let maxCapacity = Number(array[1]);

    for (let i = 2; i < array.length; i++) {
        let command = array[i];
        let passengers = 0;

        if (command.includes('Add')) {
            command = command.split(' ');
            passengers = Number(command[1]);
            passengersInWagon.push(passengers);
        } else {
            passengers = Number(command);
            for (let j = 0; j < passengersInWagon.length; j++) {
                let totalPass = passengersInWagon[j] + passengers;

                if (totalPass <= maxCapacity) {
                    passengersInWagon.splice(j, 1, totalPass);
                    break;
                }
            }
        }
    }
    console.log(passengersInWagon.join(' '));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

)