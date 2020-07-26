function solve() {
    document.querySelector('#calculator .keys').addEventListener("click", onClick);
    document.querySelector('.top .clear').addEventListener('click', ()=>{
        memory.firstNum ='';
        memory.secondNum ='';
        memory.operator = '';

        expressionOutput.textContent='';
        result.textContent ='';

    })
    const expressionOutput = document.querySelector('#expressionOutput');
    const result = document.querySelector('#resultOutput');
     

    const memory ={
        firstNum: '',
        secondNum:'',
        operator:'',
    }

    const operations = {
        '+': () =>Number(memory.firstNum) + Number(memory.secondNum),
        '-': () =>Number(memory.firstNum) - Number(memory.secondNum),
        '*': () =>Number(memory.firstNum) * Number(memory.secondNum),
        '/': () =>Number(memory.firstNum) / Number(memory.secondNum),
        '=': () =>{},
    }

    function onClick(e){
        const value = e.target.value;
        const number = Number(value);
        
        if(Number.isNaN(number) && value !=='.'){
            //operator
            if(value !== '='){
                memory.operator = value;
            }else{
                if(memory.secondNum ===''){
                    result.textContent = NaN
                }else{
                    result.textContent = operations[memory.operator]();
                }
            }
        }else{
            //number
            if(memory.operator === ''){
                memory.firstNum += value;
            }else{
                memory.secondNum += value;
            }
        }
        expressionOutput.textContent =`${memory.firstNum} ${memory.operator} ${memory.secondNum}`
    }

}