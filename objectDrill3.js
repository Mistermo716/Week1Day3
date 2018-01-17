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

console.log('=========================');
const people = [
    {name:"zhou", jobTitle:"student",boss:"Boss Man"},
    {name:"Mo", jobTitle:"student",boss:"Boss Man"},
    {name:"Ray", jobTitle:"the last jedi",boss:"Boss Man"},
    {name:"Kobe Bryant", jobTitle:"pro basketball player",boss:"Boss Man"},
    {name:"Boss Man", jobTitle:"CEO", boss:null}
    

]
people.forEach( person =>{
    if(person.boss === null)
    {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody."`);
    }
    else
    {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`)
    }
})


