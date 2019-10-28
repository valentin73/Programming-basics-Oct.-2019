function scholarship(input){
    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minWage = Number(input.shift());

    let socailScolarship = minWage * 0.35;
    let gradeScolarship = grade * 25;

     if((income <= minWage) && grade >=4.5 && grade < 5.5){
            console.log(`You get a Social scholarship ${Math.floor(socailScolarship)} BGN`)
    }
    if (grade >=5.5 && (socailScolarship <= gradeScolarship)){
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScolarship)} BGN`);
    }else if ( grade >=5.5 && (socailScolarship > gradeScolarship)){
        console.log(`You get a Social scholarship ${Math.floor(socailScolarship)} BGN`)
    }else if((income > minWage) || grade <4.5){
        console.log("You cannot get a scholarship!");
        
    }
    }      scholarship([1, 4.5, 1])











// console.log(`1no`); //no
// scholarship([200.00, 5.40, 200.00])
// console.log(`2gradeAbove`);//grade
// scholarship([200.00, 5.60, 200.00])
// console.log(`3gradeAbove`);//grade
// scholarship([200.00, 5.50, 200.00])
// console.log(`4no`);//no
// scholarship([200.00, 4.50, 200.00])
// console.log(`5no`);//grade
// scholarship([200.00, 4.60, 200.00])
// console.log(`6no`);//no
// scholarship([200.00, 4.40, 200.00])
// console.log();

// console.log(`7gradeorwageBelow5.5`);//grade or wage
// scholarship([100.00, 5.40, 200.00])
// console.log(`8gradeorwageAbove5.5`);
// scholarship([100.00, 5.60, 200.00])
// console.log(`9gradeorwageAbove5.5`);
// scholarship([100.00, 5.50, 200.00])
// console.log(`10wageOnly`);
// scholarship([100.00, 4.50, 200.00])
// console.log(`11wageBelow5.5`);
// scholarship([100.00, 4.60, 200.00])
// console.log(`12wageOnly`);
// scholarship([100.00, 4.40, 200.00])
// console.log();

// console.log(`13no`);
// scholarship([200.00, 5.40, 100.00])
// console.log(`14gradeAbove5.5`);
// scholarship([200.00, 5.60, 100.00])
// console.log(`15gradeAbove5.5`);
// scholarship([200.00, 5.50, 100.00])
// console.log(`16no`);
// scholarship([200.00, 4.50, 100.00])
// console.log(`17no`);
// scholarship([200.00, 4.60, 100.00])
// console.log(`18no`);
// scholarship([200.00, 4.40, 100.00])
// console.log();
