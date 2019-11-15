function graduation(input){
    let name = input.shift();

    let counter = 1;
    let gradeSum = 0;

    while(counter <=12){
        let grade = Number(input.shift());
        if(grade >=4){
            gradeSum += grade;
            counter++;
        }else{
            
        }
    }
    let averageSum = gradeSum /12;
    console.log(`${name} graduated. Average grade: ${averageSum.toFixed(2)}`)
}