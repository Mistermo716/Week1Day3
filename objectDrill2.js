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
