function secretChat(input) {
    let concealedMessage = input.shift();
    let instruction = input.shift();

    while (instruction !== 'Reveal') {
        let fullLine = instruction.split(':|:');
        let command = fullLine[0]
        
        switch (command) {
            case ('InsertSpace'): {
                let index = Number(fullLine[1]);
                concealedMessage = concealedMessage.split('')
                concealedMessage.splice(index, 0, ' ')
                concealedMessage = concealedMessage.join('')
                console.log(concealedMessage);
                break;
            }
            case ('Reverse'): {
                let substring = fullLine[1];
                if (concealedMessage.includes(substring)) {
                    let length = substring.length
                    let index = concealedMessage.indexOf(substring)
                    concealedMessage = concealedMessage.split('');
                    let cutPart = concealedMessage.splice(index,length)
                    let reversedSubstring = cutPart.reverse().join('')
                    concealedMessage = concealedMessage.join('')
                    concealedMessage = concealedMessage.concat(reversedSubstring)
                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
                break;
            }
            case ('ChangeAll'): {
                let substring = fullLine[1];
                let replacement = fullLine[2];
                while(concealedMessage.includes(substring)){
                    concealedMessage = concealedMessage.replace(substring, replacement)
                }
                console.log(concealedMessage);
            }
        }


        instruction = input.shift();
    }
    console.log(`You have a new text message: ${concealedMessage}`);

} secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])