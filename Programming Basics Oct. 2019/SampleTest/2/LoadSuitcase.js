function loadSuitcases(input) {
    let capacity = Number(input.shift());

    let currentVolume = 0;
    let counter = 0;
    let lossCounter = 0;

    let isTooMuch = false;
    let command = input.shift()
    while (command !== "End" && currentVolume < capacity) {
        command == command
        if (command !== "End") {
            command = Number(command);
        }
        lossCounter++;
        if (lossCounter == 3) {
            command = command + (command * 0.10);
            lossCounter = 0;
        }
        currentVolume += command;
        if (currentVolume > capacity) {
            isTooMuch = true;
            break;
        }
        command = input.shift()
        counter++;
    }
    if (!isTooMuch) {
        console.log("Congratulations! All suitcases are loaded!");

    } else {
        console.log("No more space!");

    }
    console.log(`Statistic: ${counter} suitcases loaded.`);


}
loadSuitcases([700.5, 180, 340.6, 126, 220]);
loadSuitcases([550, 100, 252, 72, "End"]);
loadSuitcases([1200.2, 260, 380.5 , 125.6, 305, "End"])