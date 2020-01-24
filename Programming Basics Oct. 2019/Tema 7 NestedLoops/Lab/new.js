function cookie(input) {
    index = 0;
    let batch = Number(input[index]);

    let flourFound = false;
    let eggsFound = false;
    let sugarFound = false;
    let allFound = false;

    let bakeFound = false;

    for (let i = 1; i <= batch; i++) {
        index++;
        let ingredient = input[index];
        while (!bakeFound || !allFound) {
            switch (ingredient) {
                case ("flour"): {
                    flourFound = true; break;
                } case ("eggs"): {
                    eggsFound = true; break;
                } case ("sugar"): {
                    sugarFound = true; break;
                } case ("Bake!"): {
                    bakeFound = true; break;
                }
            }
            if(flourFound && eggsFound && sugarFound){
                allFound = true;
            }
        }
    }
}