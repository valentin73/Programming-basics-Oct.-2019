function heroesOfCodeAndLogic(array = []) {
    let heoesCount = Number(array.shift())

    let heroesObject = {}
    for (let i = 0; i < heoesCount; i++) {
        let [name, hp, mp] = array.shift().split(' ');

        heroesObject[name] = { hp: Number(hp), mp: Number(mp) }
    }
    console.log(heroesObject);

    let fullLine = array.shift();

    while(fullLine !== 'End'){
        let action = fullLine.split(' - ')[0]
        switch(action){
            case('CastSpell'):{
                
                break;
            }
        }
        fullLine = array.shift()
    }

}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])