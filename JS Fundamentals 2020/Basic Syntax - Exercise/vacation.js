function vacation(amountOfPeople,groupType,day ){

let totalPrice = 0;
    switch(day){
        case("Friday"):{
            switch(groupType){
                case("Students"):{
                    totalPrice = amountOfPeople * 8.45
                    if(amountOfPeople >=30){
                        totalPrice = totalPrice * 0.85
                    }
                    
                }break;
                case("Business"):{
                    totalPrice = amountOfPeople * 10.90
                    if(amountOfPeople>=100){
                        totalPrice = totalPrice -(10 * 10.90)
                    }
                }break;
                case("Regular"):{
                    totalPrice = amountOfPeople * 15
                    if(amountOfPeople>=10 && amountOfPeople <=20){
                        totalPrice = totalPrice *0.95
                    }
                }break;
            }
        }break;
        case("Saturday"):{
            switch(groupType){
                case("Students"):{
                    totalPrice = amountOfPeople * 9.80
                    if(amountOfPeople >=30){
                        totalPrice = totalPrice * 0.85
                    }
                }break;
                case("Business"):{
                    totalPrice = amountOfPeople * 15.60
                    if(amountOfPeople>=100){
                        totalPrice = totalPrice -(10 * 15.60)
                    }
                }break;
                case("Regular"):{
                    totalPrice = amountOfPeople * 20
                    if(amountOfPeople>=10 && amountOfPeople <=20){
                        totalPrice = totalPrice *0.95
                    }
                }break;
            }
        }break;
        case("Sunday"):{
            switch(groupType){
                case("Students"):{
                    totalPrice = amountOfPeople * 10.46
                    if(amountOfPeople >=30){
                        totalPrice = totalPrice * 0.85
                    }
                }break;
                case("Business"):{
                    totalPrice = amountOfPeople * 16
                    if(amountOfPeople>=100){
                        totalPrice = totalPrice -(10 * 16)
                    }
                }break;
                case("Regular"):{
                    totalPrice = amountOfPeople * 22.50
                    if(amountOfPeople>=10 && amountOfPeople <=20){
                        totalPrice = totalPrice *0.95
                    }
                }break;
            }
        }break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30,"Students" ,"Sunday");