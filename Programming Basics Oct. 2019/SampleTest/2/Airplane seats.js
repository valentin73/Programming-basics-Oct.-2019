function airplane(input) {
    let passengers = Number(input.shift());

    let windowCounter = 0;
    let middleCounter = 0;
    let pathCounter = 0;

    for (let i = 0; i < passengers; i++) {
        let currentPassenger = input.shift();
        let seatType = currentPassenger[1]
        switch (seatType) {
            case "A": windowCounter++; break;
            case "F": windowCounter++; break;

            case "B": middleCounter++; break;
            case "E": middleCounter++; break;

            case "C": pathCounter++;break;
            case "D": pathCounter++;break;

        }

    }
    let windowPercentage = windowCounter * 100 / passengers;
    let middlePercentage = middleCounter * 100 / passengers;
    let pathPercentage = pathCounter * 100 / passengers;

    console.log(`Window Seats: ${windowPercentage.toFixed(2)}%`);
    console.log(`Window Seats: ${middlePercentage.toFixed(2)}%`);
    console.log(`Window Seats: ${pathPercentage.toFixed(2)}%`);
    
} 

airplane([5, "1A", "6B", "9F", "3D", "2C"])