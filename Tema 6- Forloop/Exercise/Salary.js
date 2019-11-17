function salaryPenalty(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    let lostIt = false;
    for (let i = 2; i <= tabs + 1; i++) {
        let site = input[i];
        switch (site) {
            case ("Facebook"): {
                salary -= 150;
            } break;
            case ("Instagram"): {
                salary -= 100;
            } break;
            case("Reddit"):{
                salary -=50;
            }break;
        }
        if(salary<=0){
            lostIt = true;
            break;
        }
    }
    if(lostIt){
        console.log("You have lost your salary.");
        
    }else{
    console.log(Math.round(salary));
    }
}

salaryPenalty([ '3', '500.5', 'Facebook', 'Stackoverflow.com', 'softuni.bg', '' ]
)