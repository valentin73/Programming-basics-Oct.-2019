function roadRadar(input = []) {
    let speed = input[0];
    let area = input[1];

    const limits = { motorway: 130, interstate: 90, city: 50, residential: 20 };

    let resultMessage = (speed, limit) => {
        if (speed - limit <= 0) {

        } else if (speed - limit > 0 && speed - limit <= 20) {
            console.log("speeding");
        } else if (speed - limit > 20 && speed - limit <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }

    }

    resultMessage(speed, limits[area]);

}


roadRadar([120, 'motorway'])