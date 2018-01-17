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