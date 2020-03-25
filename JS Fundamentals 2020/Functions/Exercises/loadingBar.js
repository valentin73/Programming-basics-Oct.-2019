function loadingBar(percentages){
    if(percentages === 100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }else{
        function loadSymbolsCount(number){
            return '[' + '%'.repeat(number);
        }
        function dotsCount(number){
            return '.'.repeat(number) + ']';
        }

        let loadSymbolsCountValue = loadSymbolsCount(percentages / 10);
        let dotsCountValue = dotsCount(10 - (percentages / 10));

        console.log(`${percentages}% ${loadSymbolsCountValue}${dotsCountValue}`);
        console.log('Still loading...');

    }
}
loadingBar(50)