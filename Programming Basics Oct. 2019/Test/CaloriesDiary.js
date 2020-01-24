function calories(input){
    let index = 0;
    let recommendedCalories = Number(input[index]);
    index++;
    let activities = Number(input[index]);

    let activitiesCounter = 0;
    let currentCalories = 0;
    while( activities > activitiesCounter){
        index++;
        let data = input[index];
        switch(data){
            case("eat"):{
                index++;
                currentCalories += Number(input[index]);
                break;
            }  
            case("training"):{
                index++;
                currentCalories -= Number(input[index]);
                if(currentCalories < 0){
                    currentCalories = 0
                }
                break;
            }
        }
        
        if(recommendedCalories < currentCalories){
            break;
        }
        activitiesCounter++
    }
    let diff = recommendedCalories - currentCalories;

    if( recommendedCalories >= currentCalories){
        console.log(`Nice job! Today was a heathy day!`);
        console.log(`Calories to the limit: ${Math.abs(diff)}`);
    }else {
        console.log(`Oh no, it seems you ate too much...`);
        console.log(`Overdose: ${Math.abs(diff)}`);
 
    }
}
calories([ '1200', '1', 'training', "100", 'eat', '760' ])