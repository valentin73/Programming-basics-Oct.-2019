function fruitShop(input){
    let fruit = input.shift();
    let day = input.shift();
    let amount = Number(input.shift());

    let bananaPrice = 2.50;
    let applePrice =1.20;
    let orangePrice = 0.85;
    let grapefruitPrice = 1.45;
    let kiwiPrice = 2.70;
    let pineapplePrice = 5.50;
    let grapesPrice = 3.85
    switch(day){
        case("Monday"):
        case("Tuesday"):
        case("Wednesday"):
        case("Thursday"):
        case("Friday"):

        if(fruit === "banana"){
            console.log((amount * bananaPrice).toFixed(2));
            
        }else if( fruit === "apple"){
            console.log((amount * applePrice).toFixed(2));
            
        }else if( fruit === "orange"){
            console.log((amount * orangePrice).toFixed(2));
            
        }else if( fruit === "grapefruit"){
            console.log((amount * grapefruitPrice).toFixed(2));
            
        }else if(fruit === "kiwi"){
            console.log((amount * kiwiPrice).toFixed(2));
            
        }else if(fruit === "pineapple"){
            console.log((amount * pineapplePrice).toFixed(2));
            
        }else if(fruit === "grapes"){
            console.log((amount * grapesPrice).toFixed(2));
            
        }break;
        
        case("Saturday"):
        case("Sunday"):

        
             bananaPrice = 2.70;
             applePrice =1.25;
             orangePrice = 0.90;
             grapefruitPrice = 1.60;
             kiwiPrice = 3.00;
             pineapplePrice = 5.60;
             grapesPrice = 4.20;

             if(fruit === "banana"){
                console.log((amount * bananaPrice).toFixed(2));
                
            }else if( fruit === "apple"){
                console.log((amount * applePrice).toFixed(2));
                
            }else if( fruit === "orange"){
                console.log((amount * orangePrice).toFixed(2));
                
            }else if( fruit === "grapefruit"){
                console.log((amount * grapefruitPrice).toFixed(2));
                
            }else if(fruit === "kiwi"){
                console.log((amount * kiwiPrice).toFixed(2));
                
            }else if(fruit === "pineapple"){
                console.log((amount * pineapplePrice).toFixed(2));
                
            }else if(fruit === "grapes"){
                console.log((amount * grapesPrice).toFixed(2));
                
            }break;
    }
    if(day !="Monday" && day !="Tuesday" && day !="Wednesday" && day !="Thursday" && day !="Friday" && day !="Saturday" && day !="Sunday" ){
        console.log("error");
        
    } else if(fruit != "banana" && fruit != "apple" && fruit != "orange" && fruit != "grapefruit" && fruit != "kiwi" && fruit != "pineapple" && fruit != "grapes"){
        console.log("error");
        
    }
}   
fruitShop(["water", "Nineday", 2.5])