//Nested Objects and Arrays
//Task 4.1: Array of Objects

const students = [
 {name: "Renujaan", age: 21, faculty: "Computing"},
 {name: "Kishonithan", age: 22, faculty: "Engineering"},
 {name: "Nandakisho", age: 23, faculty: "IT"}
];

//Print all student names
console.log("\nAll Student Names");
students.forEach(student => {
    console.log(student.name);
});


//Use .filter() to find students older than 21.
const olderStudents = students.filter(student => student.age > 21);
console.log("\nStudents Older Than 21 (filter):", olderStudents);

//Use .map() to create an array of all faculty names.
const facultyNames = students.map(student => student.faculty);
console.log("\nAll Faculty Names (map):", facultyNames);


//Task 4.2: Object Containing an Array of Objects
const classroom = {
 className: "IT2025",
 teacher: "Mr. Luxshan",
 students: [
 {name: "Renujaan", age: 21},
 {name: "Kishonithan", age: 22},
 {name: "Nandakisho", age: 23}
 ]
};

//Print the teacher’s name.
console.log("\nTeacher's Name:", classroom.teacher);

//Add a new student to the array.
classroom.students.push({
    name: "Kubasharoon",
    age: 21
});
console.log("\nAfter adding new student:", classroom.students);

//Print all student names in the classroom.
console.log("\nStudents in Classroom");
classroom.students.forEach(student => {
    console.log(student.name);
});
