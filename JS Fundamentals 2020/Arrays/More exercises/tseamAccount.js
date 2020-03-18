function tseamAccount(commandsArray = []) {
    let resultAccount = [];
    resultAccount = commandsArray[0].split(' ');
    let currentCommand = ' ';

    while (currentCommand !== 'Play!') {
        for (let i = 1; i < commandsArray.length; i++) {
            let splittedString = commandsArray[i].split(' ');
            currentCommand = splittedString[0];
            let currentGame = splittedString[1]

            switch (currentCommand) {
                case ('Install'): {
                    if (!(resultAccount.includes(currentGame))) {
                        resultAccount.push(currentGame)
                    }
                    break;
                }
                case ('Uninstall'): {
                    if (resultAccount.includes(currentGame)) {
                        let index = resultAccount.indexOf(currentGame);
                        resultAccount.splice(index, 1)
                    }
                    break;
                }
                case ('Update'): {
                    if (resultAccount.includes(currentGame)) {
                        let index = resultAccount.indexOf(currentGame);
                        resultAccount.splice(index, 1)
                        resultAccount.push(currentGame)
                    }
                    break;
                }
                case ('Expansion'): {
                    let expandedGame = currentGame.split('-').join(':')
                    currentGame = currentGame.split("-")[0]
                    if (resultAccount.includes(currentGame)) {
                        let index = resultAccount.indexOf(currentGame);
                        resultAccount.splice(index + 1, 0, expandedGame)
                    }
                    break;

                }
            }
        }
    }
    console.log(resultAccount.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);