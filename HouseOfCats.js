function houseOfCats(legs) {
    //Note: Number is guaranteed even, from 0 to 48(including, because it is even);

    //humans: 2 legs
    //cats: 4 legs



    numberOfLegs = Number.parseInt((legs.shift())); //integer legs: assign a variable that cannot be a fraction number

    let numberOfHumans = [numberOfLegs / 2]; //This is an array for having only humans in the house.

    if (numberOfLegs > 0) {   //This is a loop checking all the possible scenarios in which there are humans and cats.If "numberOfLEgs" is 0 then the loop will not be executed
        for (let i = numberOfLegs; i > 0;) {
            i -= 4;

            if (i <= 0) { //if the variable "i" reaches 0 the loop stops
                break;
            }
            numberOfHumans.push(i / 2); //This tells us for every 2 legs there is 1 human
        }
    }
    numberOfHumans.sort(function (a, b) { return a - b });   // this fucntion sorts the numbers of the array in an ascending order after we print it ( with console.log())

    console.log(numberOfHumans);  //output showing number of humans
}

houseOfCats([6]) //input showing total number of legs ( humans and cats)