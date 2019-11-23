function cookieFactory(input){
    let index =0;
    let batch = Number(input[index]);
    
    let flourFound = false;
    let eggsFound = false;
    let sugarFound = false;
    let allFound = false;
    let currentBatch = 0;
    for(let i = 1; i <= batch; i++ ){
        index++;
        let ingredient = input[index]
       
        while(ingredient !== "Bake!" ){
            switch(ingredient){
                case("flour"):{
                    flourFound = true;break;
                }case("eggs"):{
                    eggsFound = true;break;
                }case("sugar"):{
                    sugarFound = true;break;
                }

            }
            if(flourFound && eggsFound && sugarFound){
                allFound = true;
            
            }
            index++;
            ingredient = input[index];
        }
        currentBatch++;
        if(allFound){
            console.log(`Baking batch number ${currentBatch}...`);
            
        }else{
            console.log("The batter should contain flour, eggs and sugar!");
            
        }
    }
    
}
cookieFactory([
    '3',     'flour',   'eggs',
    'jam',   'Bake!',   'sugar',
    'Bake!', 'flour',   'eggs',
    'milk',  'almonds', 'sugar',
    'Bake!', 'flour',   'eggs',
    'sugar', 'Bake!'
  ]
  );


