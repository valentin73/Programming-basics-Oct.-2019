function passwordReset(strings = []) {
    let predefinedString = strings[0];

    for(let i = 1; i < strings.length; i++){
        
        let fullString = strings[i].split(' ');
        let command = fullString[0];
        let stop = false;

        switch(command){
            case('TakeOdd'):{
                let rawPassword = [];
                for (let i = 0; i < predefinedString.length; i++) { 
                    if(i % 2 !==0 ){
                        rawPassword.push(predefinedString[i])
                    }
                }
                predefinedString = rawPassword.join('')
                console.log(predefinedString);
                break;
            }
            case('Cut'):{
               let index = Number(fullString[1]);
               let deleteCount = Number(fullString[2])
               let stringArray = predefinedString.split('');
               stringArray.splice(index, deleteCount);
               stringArray = stringArray.join('');
               predefinedString = stringArray
               console.log(predefinedString);
                break;
            }
            case('Substitute'):{
               let substring = fullString[1];
               let substitution = fullString[2];
               if(predefinedString.includes(substring)){
                   while(predefinedString.includes(substring)){
                     predefinedString = predefinedString.replace(substring, substitution)
                   }
                   console.log(predefinedString);
               }else{
                   console.log("Nothing to replace!");
               }
                break;
            }
            case('Done'):{
                stop = true;
                break;
            }
        }

        if (stop) {
            break;
        }

    }
    console.log(`Your password is: ${predefinedString}`);
}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  )