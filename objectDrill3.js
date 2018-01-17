const loaf = {
    flour:300,
    water:210,
    hydration(){
        return (this.water/this.flour) * 100;
    }
};
console.log(`Flour: ${loaf.flour} Water: ${loaf.water}`);
console.log("Hydration: " + loaf.hydration());

console.log("================")

const myobj = {
    foo:'myfoo',
    bar: 'mybar',
    fum: 'myfum',
    quux: 'myquux',
    spam: 'myspam'
}
for (let key in myobj){
    console.log(key + " : " + myobj[key])
}
console.log('===================');
const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],

};
console.log(hobbit.meals[3]);

const people = [
    {name:"zhou", jobTitle:"student"},
    {name:"Mo", jobTitle:"student"},
    {name:"Ray", jobTitle:"the last jedi"},
    {name:"Kobe Bryant", jobTitle:"pro basketball player"}

]
people.forEach( person =>{
    console.log(`${person.name} : ${person.jobTitle}`)
})