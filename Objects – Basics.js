//Objects – Basics
//Task 3.1: Creating and Accessing Objects

const student = {
 name: "Renujaan",
 age: 22,
 faculty: "Computing",
 subjects: ["Web Development", "Database Systems",
"Programming"]
};

//Print the student’s name and faculty.
console.log("\nStudent Name:", student.name);
console.log("Student Faculty:", student.faculty);


//Add a new property called year with value 2025.
student.year = 2025;
console.log("\nAfter adding year:", student);

//Change the age to 22.
student.age = 22;
console.log("\nAfter changing age:", student.age);

//Print all subjects in a loop.
console.log("\nStudent Subjects");
student.subjects.forEach(subject => {
    console.log(`- ${subject}`);
});

