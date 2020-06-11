function ticTac(input = []){
    let state =[[false, false ,false],
                [false, false ,false],
                [false, false ,false]];
    
    let Xturns = 1;
    let Oturns = 0;

    for (let i = 0; i < input.length; i++) {
        const coordinates = input[i];
        let [x, y] = coordinates.split(' ').map(Number);
        
        if(Xturns > Oturns){
            if(state[x][y] === false){
                state[x][y] = 'X'
                Oturns++;
            }
        }else{
            if(state[x][y] === false){
                state[x][y] = 'O'
                Xturns++;
            }
        }

        let rowsWinResult = rowsWin(state)
        
        
        console.log(rowsWinResult);

    }   
    console.log(state.join('\n'));

    function rowsWin(currentState){
       let isWin = currentState.reduce((acc, curr) =>{
            return (acc === curr) ? acc : 'no';
        })
        return (isWin === 'no') ? false : true;
    }
    
}
ticTac(["0 1",
"1 0",
"0 2", 
"2 0",
"0 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)