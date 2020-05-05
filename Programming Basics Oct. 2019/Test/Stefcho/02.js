function solve(intellect, strength, sex) {
 
    intellect = Number(intellect);
    strength = Number(strength);
 
    if(intellect >= 80) {
        if(strength >= 80) {
            if(sex == 'female') {
                console.log('Queen Bee');
            }else{
                console.log('Repairing Bee');
            }
        } else {
            console.log('Repairing Bee');
        }
    } else if(intellect >= 60 && intellect < 80) {
        console.log('Cleaning Bee');
    } else {
        if(strength >= 80) {
            if(sex == 'male') {
                console.log('Drone Bee');
            } else {
                console.log('Guard Bee');
            }
        } else if(strength >= 60 && strength < 80) {
            console.log('Guard Bee');
        } else {
            console.log('Worker Bee');
        }
    }
}
solve(12,
    1002,
    'female'
    )