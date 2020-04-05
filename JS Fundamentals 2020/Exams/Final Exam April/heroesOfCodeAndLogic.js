function heroesOfCodeAndLogic(array = []) {
    let heoesCount = Number(array.shift())

    function castSpell(hero, mpNeeded, spellName) {
        let mp = heroesObject[hero].manaPoints;

        if (mp < mpNeeded) {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        } else {
            mp -= mpNeeded;
            heroesObject[hero].manaPoints = mp;
            console.log(`${hero} has successfully cast ${spellName} and now has ${mp} MP!`);

        }
    }

    function takeDamage(hero, damage, monster) {
        let hp = heroesObject[hero].hp - damage;
        heroesObject[hero].hp -= damage;

        if (heroesObject[hero].hp < 1) {
            console.log(`${hero} has been killed by ${monster}!`);
        } else {
            console.log(`${hero} was hit for ${damage} HP by ${monster} and now has ${hp} HP left!`);
        }

    }

    function recharge(hero, rechargeAmount) {
        rechargeAmount = Number(rechargeAmount)

        let mp = heroesObject[hero].manaPoints + rechargeAmount;
        if (mp > 200) {
            rechargeAmount = rechargeAmount - (mp - 200);
            mp = 200;
        }

        heroesObject[hero].manaPoints = mp;

        console.log(`${hero} recharged for ${rechargeAmount} MP!`);


    }
    function heal(hero, healAmount) {
        healAmount = Number(healAmount)
        let currentHealth = heroesObject[hero].hp + healAmount;


        if (currentHealth > 100) {
            healAmount = healAmount - (currentHealth - 100);
            currentHealth = 100;
        }

        heroesObject[hero].hp = currentHealth;

        console.log(`${hero} healed for ${healAmount} HP!`);

    }

    let heroesObject = {}
    for (let i = 0; i < heoesCount; i++) {
        let [name, hp, mp] = array.shift().split(' ');

        heroesObject[name] = { hp: Number(hp), mp: Number(mp) }
    }
    console.log(heroesObject);

    let fullLine = array.shift();

    while(fullLine !== 'End'){
        let [action, hero, number, argument] = fullLine.split(' - ')[0]
        switch(action){
            case('CastSpell'):{
                castSpell(hero, number, argument)
                break;
            }
            case('TakeDamage'):{
                takeDamage(hero, number, argument)
                break;
            }
            case('Recharge'):{
                recharge(hero, rechargeAmount);
                break;
            }
            case('Heal'):{
                heal(hero, healAmount);
                break;
            }
        }
        fullLine = array.shift()
    }

    let hearoesAlive = (allHeroes) => {
        for (const hero in allHeroes) {
            if (heroesObject[hero].hp < 1) {
                delete heroesObject[hero];
            }
        }
    }
    hearoesAlive(heroesObject)

    let healthOfHeroes = [];

    for (let hero in heroesObject) {
        healthOfHeroes.push([hero, heroesObject[hero].hp])
    }
    healthOfHeroes.sort(function (a, b) {

        return a[0].localeCompare(b[0]);
    });

    healthOfHeroes.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let hero of healthOfHeroes) {
        let name = hero[0];

        console.log(name);
        console.log(` HP: ${heroesObject[name].hp}`);
        console.log(` MP: ${heroesObject[name].mp}`);


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