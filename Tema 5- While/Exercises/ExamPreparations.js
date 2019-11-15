function examPreparations(input) {
    let maxBadGrades = Number(input.shift());

    let counter = 0;
    let badGradesCounter = 0;

    let sumGrades = 0;
    let avarageGrade = 0;
    let lastProblem = "";
    while (badGradesCounter < maxBadGrades) {
        let problemName = input.shift();
        let problemGrade = Number(input.shift());
    
        if (problemName === "Enough") {
            console.log(`Average score: ${avarageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${counter}`);
            console.log(`Last problem: ${lastProblem}`);
           break;
        }else if (problemGrade <= 4) {
            badGradesCounter++;
            if (badGradesCounter === maxBadGrades) {
                console.log(`You need a break, ${badGradesCounter} poor grades.`);
                break;
            }
        }
        sumGrades += problemGrade
        counter++;
        avarageGrade = sumGrades / counter;
        lastProblem = problemName;

    }
}
examPreparations([
    3,
    "Money",
    6,
    "Story",
    5,
    "Spring Time",
    5,
    "Bus",
    6,
    "Enough",
])