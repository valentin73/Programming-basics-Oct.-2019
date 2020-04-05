function heroesOfCALVII(input = []) {
    let lines = input.slice(0, input.indexOf('End'));
    let numOfHeroes = lines.shift();

    let objOfHeroObj = {};
    // Filling Object of Heroes
    for (let i = 0; i < numOfHeroes; i++) {
        let [heroName, hitPoints, manaPoints] = lines.shift().split(" ");

        objOfHeroObj[heroName] =
        {
            hitPoints: +hitPoints,
            manaPoints: +manaPoints
        };
    }
    // Checking Commands

    for (const line of lines) {
        let [action, hero, number, argument] = line.split(" - ");

        if (action === 'CastSpell') {
            castSpell(hero, number, argument)

        } else if (action === 'TakeDamage') {
            takeDamage(hero, number, argument)

        } else if (action === 'Recharge') {
            recharge(hero, number);

        } else if (action === 'Heal') {
            heal(hero, number);
        }
    }

    // functions
    function castSpell(hero, mpNeeded, spellName) {
        let heroMana = objOfHeroObj[hero].manaPoints;

        if (heroMana < mpNeeded) {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        } else {
            heroMana -= mpNeeded;
            objOfHeroObj[hero].manaPoints = heroMana;
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroMana} MP!`);

        }
    }

    function takeDamage(hero, damage, attacker) {
        let heroHp = objOfHeroObj[hero].hitPoints - damage;
        objOfHeroObj[hero].hitPoints -= damage;


        if (objOfHeroObj[hero].hitPoints < 1) {
            console.log(`${hero} has been killed by ${attacker}!`);
        } else {
            console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroHp} HP left!`);
        }

    }

    function recharge(hero, amountRecharge) {
        amountRecharge = Number(amountRecharge)

        let heroMana = objOfHeroObj[hero].manaPoints + amountRecharge;

        if (heroMana > 200) {
            amountRecharge = amountRecharge - (heroMana - 200);
            heroMana = 200;
        }

        objOfHeroObj[hero].manaPoints = heroMana;

        console.log(`${hero} recharged for ${amountRecharge} MP!`);


    }

    function heal(hero, amountHeal) {
        amountHeal = Number(amountHeal)
        let heroHealth = objOfHeroObj[hero].hitPoints + amountHeal;


        if (heroHealth > 100) {
            amountHeal = amountHeal - (heroHealth - 100);
            heroHealth = 100;
        }

        objOfHeroObj[hero].hitPoints = heroHealth;

        console.log(`${hero} healed for ${amountHeal} HP!`);

    }

    // living heroes
    let livingHeroes = (allHeroes) => {
        for (const hero in allHeroes) {
            if (objOfHeroObj[hero].hitPoints < 1) {
                delete objOfHeroObj[hero];
            }
        }

    }
    livingHeroes(objOfHeroObj)

    // Sorting

    let heroesAndHP = [];

    for (const hero in objOfHeroObj) {
        heroesAndHP.push([hero, objOfHeroObj[hero].hitPoints])
    }



    heroesAndHP.sort(function (a, b) {

        return a[0].localeCompare(b[0]);
    });

    heroesAndHP.sort(function (a, b) {
        return b[1] - a[1];
    });




    // log results
    for (const hero of heroesAndHP) {
        let name = hero[0];

        console.log(name);
        console.log(` HP: ${objOfHeroObj[name].hitPoints}`);
        console.log(` MP: ${objOfHeroObj[name].manaPoints}`);


    }


}heroesOfCALVII

([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])