function makeStudentReport(data) {
  const arrStudent = [];
  data.forEach(function(student){
    arrStudent.push(`${student.name} : ${student.grade}`);
  });
  return arrStudent;
    
}
const data = [{name:'Zhou', grade: 'A'}, {name: 'Johnny Robot', grade: 'C'}];
console.log(makeStudentReport(data));
console.log("=================")

const sampleStudents = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollSummer( students ) {
  students.forEach( student => {
    student.status = "In summer class"
  })
  return students
}
console.log(sampleStudents)
enrollSummer(sampleStudents)
console.log(sampleStudents)

function findById(items, idNum)
{
    let itemCar;
    items.forEach(item => {
        if (item.id === idNum)
        {
            itemCar = item;
        }
    });
    return itemCar;
}
console.log('=====================');
const studentData = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
console.log(findById(studentData, 2));

console.log("==================")

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKey(obj, expectedKeys){
  const keys = Object.keys(obj)
  if (keys.length !== expectedKeys.length){
    return false
  }
  keys.forEach( key =>{
    const found = expectedKeys.find( element => {
      if(element !== key) { return false}
    })
  })

  return true

}

console.log(validateKey(objectA, expectedKeys))
console.log(validateKey(objectB, expectedKeys))
