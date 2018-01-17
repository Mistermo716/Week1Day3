function makeStudentReport(data) {
    const arrStudent = [];
    data.forEach(function(student){
        arrStudent.push(`${student.name} : ${student.grade}`);
    });
    return arrStudent;
    
}
const data = [{name:'Zhou', grade: 'A'}, {name: 'Johnny Robot', grade: 'C'}];
console.log(makeStudentReport(data));