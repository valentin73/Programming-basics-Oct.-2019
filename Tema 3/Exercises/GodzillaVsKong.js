function godzillaVsKong(input){
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let priceStatist = Number(input.shift());

    let decor = budget * 0.10;
    let clothes = 0;
    if(statists > 150){
        priceStatist = priceStatist - (priceStatist * 0.10);
    }

    clothes = statists * priceStatist;
    let fullPrice = decor + clothes;

    if(fullPrice > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(fullPrice - budget).toFixed(2)} leva more.`);
        
    }else if ( fullPrice <= budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - fullPrice).toFixed(2)} leva left.`);
        
    }
}
godzillaVsKong([20000,120,55.5])