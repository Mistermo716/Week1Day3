function createMyObject()
{
    return {
        foo:'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello()
        {
            return 'hello';
        }
    };
};
const test = createMyObject();

function objectUpdater(obj){
    obj.foo = "foo"
    obj.bar = "bar"
    obj.bizz = "bizz"
    obj.bang = "bang"
    return  obj
}

objectUpdater(test)

console.log(test)
