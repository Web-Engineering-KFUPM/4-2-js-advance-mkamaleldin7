/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

let student = {
    firstName: "Mohamed",
    lastName: "Kamaleldin",
    gpa: 3.5,
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set updateGPA(newGPA) {
        if (newGPA >= 0.0 && newGPA <= 4.0) {
            this.gpa = newGPA;
        } else {
            console.log("GPA should be between 0.0 and 4.0!!");
        }
    }
};

// Calling the methods:
console.log(student.fullName); 
console.log(student.gpa);

// Valid Case
student.updateGPA = 3.8;
console.log(student.gpa);

// Fail Case
student.updateGPA = 4.5;

console.log("=================================");
// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseMap = {
   SWE363 : "Web Development",
   COE301 : "Computer Architecture",
   ICS343 : "Computer Networks"
}

for (course in courseMap) {
    console.log(course + " : " + courseMap[course]);
}


console.log("=================================");

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

let myString = "Web Development is the Best!";
console.log("String: " + myString);
console.log("String Length: " + myString.length);
console.log("First Character: " + myString.charAt(0));
console.log("Sixth Character(index 5): " + myString.charAt(5));
console.log("Last character: " + myString.charAt(myString.length - 1));

console.log("=================================");


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

let currentDate = new Date();
console.log("Current Date: " + currentDate);
console.log("Day of Month: " + currentDate.getDate());
console.log("Month (0-11): " + currentDate.getMonth());
console.log("Year: " + currentDate.getFullYear());

console.log("=================================");


// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/

let myArray = [1,2,3,4,5,6,7,8,9,10];
let min = Math.min(...myArray);
let max = Math.max(...myArray);
console.log("Array: " + myArray);
console.log("Minimum Value: " + min);
console.log("Maximum Value: " + max);

console.log("=================================");


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

function findArrayMax(array) {
    if ( array.length === 0 ){
      throw new Error("Array is empty");
    } 
      return Math.max(...array);
}

try { 
   let max = findArrayMax(myArray);
   console.log("Maximum Value from Try Block: " + max);
   let emptyArray = [];
   max = findArrayMax(emptyArray);
} catch (e){
   console.log("Error: " + e.message);
} finally {
   console.log("Function completed.");
}

console.log("=================================");


// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;

words.forEach(word => {
    if (pattern.test(word)) {
        console.log(word + " matches!");
    }
});   

// End of Advance JavaScript Lab — good luck!
