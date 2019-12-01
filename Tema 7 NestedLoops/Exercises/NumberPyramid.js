function numberPyramid(input) {
    let number = Number(input[0]);

    let counter = 1;
    let output = "";
    let stopIt = false;

    for (let rows = 1; rows <= number; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (counter > number) {
                stopIt = true;
                break;
            }
            output += `${counter} `
            counter++;
        }
        console.log(output);
        output = "";
        if (stopIt) {
            break;
        }
    }

} numberPyramid([7])