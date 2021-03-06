function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello() {
            return 'hello';
        }
    };
};
const test = createMyObject();

function objectUpdater(obj) {
    obj.foo = "foo"
    obj.bar = "bar"
    obj.bizz = "bizz"
    obj.bang = "bang"
    return obj
}

objectUpdater(test)

console.log(test)

function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName() { return this.firstName + " " + this.lastName;}
    };
    return person;
}

function keyDeleter(obj){
    delete obj.foo
    delete obj.bar
    return obj
}
console.log("========================")
console.log(test)
keyDeleter(test)
console.log(test)

