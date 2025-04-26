
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filePath = "students.json";
let students = [];

// Load students from file if it exists
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    students = JSON.parse(data);
}

// Save students to file
function saveStudents() {
    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
}

// Function to add a student
function addStudent() {
    rl.question("Enter student's name: ", (name) => {
        rl.question("Enter student's age: ", (age) => {
            rl.question("Enter student's gender: ", (gender) => {
                students.push({ name, age: parseInt(age), gender });
                console.log(`Student added successfully: ${name}`);
                saveStudents(); // Save to file after adding
                showMenu();
            });
        });
    });
}

// Function to display all students
function showAllStudents() {
    if (students.length === 0) {
        console.log("No students available to display.");
    } else {
        console.log("\nStudent Table:");
        console.log("+------------------+-----+--------+");
        console.log("| Name             | Age | Gender |");
        console.log("+------------------+-----+--------+");
        students.forEach((student, index) => {
            console.log(`| ${student.name.padEnd(16)} | ${student.age.toString().padEnd(3)} | ${student.gender.padEnd(6)} | (${index + 1})`);
        });
        console.log("+------------------+-----+--------+");
    }
    showMenu();
}

// Function to update student details
function updateStudent() {
    if (students.length === 0) {
        console.log("No students available to update.");
        showMenu();
    } else {
        // Show the student table for selection
        console.log("\nStudent Table:");
        console.log("+------------------+-----+--------+");
        console.log("| Name             | Age | Gender |");
        console.log("+------------------+-----+--------+");
        students.forEach((student, index) => {
            console.log(`| ${student.name.padEnd(16)} | ${student.age.toString().padEnd(3)} | ${student.gender.padEnd(6)} | (${index + 1})`);
        });
        console.log("+------------------+-----+--------+");

        rl.question("Enter the number of the student you want to update: ", (index) => {
            index = parseInt(index) - 1; // Convert to zero-based index
            if (index < 0 || index >= students.length) {
                console.log("Invalid student number. Please try again.");
                showMenu();
            } else {
                const student = students[index];
                console.log(`Updating details for ${student.name}:`);
                rl.question("Enter new name (or press Enter to keep current): ", (name) => {
                    rl.question("Enter new age (or press Enter to keep current): ", (age) => {
                        rl.question("Enter new gender (or press Enter to keep current): ", (gender) => {
                            if (name.trim() !== "") student.name = name.trim();
                            if (age.trim() !== "") student.age = parseInt(age.trim());
                            if (gender.trim() !== "") student.gender = gender.trim();
                            console.log(`Student updated successfully: ${student.name}`);
                            saveStudents(); // Save to file after updating
                            showMenu();
                        });
                    });
                });
            }
        });
    }
}

// Function to remove a student
function removeStudent() {
    if (students.length === 0) {
        console.log("No students available to remove.");
        showMenu();
    } else {
        // Show the student table for selection
        console.log("\nStudent Table:");
        console.log("+------------------+-----+--------+");
        console.log("| Name             | Age | Gender |");
        console.log("+------------------+-----+--------+");
        students.forEach((student, index) => {
            console.log(`| ${student.name.padEnd(16)} | ${student.age.toString().padEnd(3)} | ${student.gender.padEnd(6)} | (${index + 1})`);
        });
        console.log("+------------------+-----+--------+");

        rl.question("Enter the number of the student you want to remove: ", (index) => {
            index = parseInt(index) - 1; // Convert to zero-based index
            if (index < 0 || index >= students.length) {
                console.log("Invalid student number. Please try again.");
                showMenu();
            } else {
                const removedStudent = students.splice(index, 1); // Remove the student from the array
                console.log(`Student removed successfully: ${removedStudent[0].name}`);
                saveStudents(); // Save to file after removing
                showMenu();
            }
        });
    }
}

// Function to display menu
function showMenu() {
    console.log(`
    1. Add Student
    2. Show All Students
    3. Update Student
    4. Remove Student
    5. Exit
    `);
    rl.question("Enter your option: ", (option) => {
        switch (option) {
            case "1":
                addStudent();
                break;
            case "2":
                showAllStudents();
                break;
            case "3":
                updateStudent();
                break;
            case "4":
                removeStudent();
                break;
            case "5":
                console.log("Exiting program. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Try again.");
                showMenu();
        }
    });
}

// Start the program
showMenu();
