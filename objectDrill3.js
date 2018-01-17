const loaf = {
    flour:300,
    water:210,
    hydration(){
        return (this.water/this.flour) * 100;
    }
};
console.log(`Flour: ${loaf.flour} Water: ${loaf.water}`);
console.log("Hydration: " + loaf.hydration());