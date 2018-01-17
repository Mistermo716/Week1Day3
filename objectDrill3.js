const loaf = {
    flour: 300,
    water: 210,
    hydration() {
        return (this.water / this.flour) * 100;
    }
};
console.log(`Flour: ${loaf.flour} Water: ${loaf.water}`);
console.log("Hydration: " + loaf.hydration());

console.log("================")

const myobj = {
    foo: 'myfoo',
    bar: 'mybar',
    fum: 'myfum',
    quux: 'myquux',
    spam: 'myspam'
}
for (let key in myobj) {
    console.log(key + " : " + myobj[key])
}
console.log('===================');
const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],

};
console.log(hobbit.meals[3]);

console.log('=========================');
const people = [{
        name: "zhou",
        jobTitle: "student",
        boss: "Boss Man"
    },
    {
        name: "Mo",
        jobTitle: "student",
        boss: "Boss Man"
    },
    {
        name: "Ray",
        jobTitle: "the last jedi",
        boss: "Boss Man"
    },
    {
        name: "Kobe Bryant",
        jobTitle: "pro basketball player",
        boss: "Boss Man"
    },
    {
        name: "Boss Man",
        jobTitle: "CEO"
    }


]
people.forEach(person => {
    if (!person.hasOwnProperty('boss')) {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody."`);
    } else {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`)
    }
})

console.log("===============================")

function cypher(stringWord) {
    const codeBase = {
        a: 2,
        b: 3,
        c: 4,
        d: 5
    }
    let result = ""
    return stringWord
        .split(' ')
        .reduce((acc, curr) => {
            let received = compareKey(codeBase, curr)
            return acc + received
        }, "")
}

function compareKey(codeBase, word) {
    let result = ' ';
    for (let key in codeBase) {
        if (key === word[0]) {
            const index = codeBase[key]
            return result = word[index - 1]
        } else {
            result = ' '
        }
    }
    // console.log(result)
    return result
}

const message = "aS bsO dqweS fskfdkjf"

console.log(cypher(message))

console.log('=========================');

function createCharacter(name, race, origin, attack, defense) {
    return {
        name: name,
        race: race,
        origin,
        attack,
        defense,
        describe: function () {
            return `${this.name} is a ${this.race} from ${this.origin}`;
        },
        evaluateFight: function (enemy) {
            return `Your opponent takes ${this.attack-enemy.defense} damage and you receive ${enemy.attack-this.defense} damage`;
        }
    }
}


let charArray = [createCharacter('Gand','Wizard','Middle Earth',10,2), 
    createCharacter('bilbo','Hobbit','The Shire',2,1), 
    createCharacter('Frodo','Hobbit','The Shire',3,2),
    createCharacter('Aragorn','Man','The Shire',6,8),
    createCharacter('Lego','Elf','Woodland',8,5)]

charArray.find(function(character) {
    if(character.name === 'Aragorn')
    {
        return character.describe();
    }
});
const hobbitArray = charArray.filter(character => character.race === 'Hobbit');
const attackArray = charArray.filter(character => character.attack > 5);
console.log(hobbitArray);
console.log(attackArray);

let weaponArray = ['Wizard Staff', 'Ring', 
'String and Barrow Blade', 'Anduril', 'Bow and Arrow'];

for (let i = 0; i < charArray.length; i++)
{
    charArray[i].weapon = weaponArray[i];
    console.log(charArray[i].describe() + ` who uses ${charArray[i].weapon}`);
}
