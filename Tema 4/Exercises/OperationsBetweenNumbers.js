function operations(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();

    let result;


    switch (operator) {
        case ("+"): {
            result = num1 + num2;

            if (result % 2 == 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        }; break;
        case ("-"): {
            result = num1 - num2;

            if (result % 2 === 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        }; break;
        case ("*"): {
            result = num1 * num2;

            if (result % 2 === 0) {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);

            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        };break;
        case ("/"): {
            result = num1 / num2;
            if(num1 = 0 ){
                console.log(`Cannot divide ${num1} by zero`);
            }else if (num2 =0){
                console.log(`Cannot divide ${num2} by zero`);
            }

        } ;break;
        case ("%"): {
            result = num1 % num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            if (num2 = 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else if (num1 = 0) {
                console.log(`Cannot divide ${num2} by zero`);
            }
        }; break;

    }

}
operations([112,0,"/"])