// SECTION 1 – ARRAY METHODS 
// Task 1 – forEach()
let subjects = ["Maths", "Science", "English", "History"];

let forEachResult = subjects.forEach((subject, index) => {
  console.log(`Subject ${index + 1}: ${subject}`);
});
console.log("forEach returns:", forEachResult);
// forEach returns undefined because it does not return a new array.

// Task 2 – map()
let prices = [100, 200, 300, 400];
let gstPrices = prices.map(price => price + price * 0.10);
console.log("Prices with GST:", gstPrices);

// Task 3 – filter()
let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
];

let passedStudents = students.filter(student => student.marks > 50);
console.log("Students above 50:", passedStudents);

// Task 4 – find()
let firstTopper = students.find(student => student.marks > 50);
console.log("First student above 50:", firstTopper);
// filter() returns all matching elements.
// find() returns only the first matching element.

// Task 5 – reduce()
let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
  { item: "Watch", price: 3000 }
];

let totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice);

let totalWithTax = cart.reduce((total, product) => total + product.price * 1.05, 0);
console.log("Total with 5% Tax:", totalWithTax);
// Task 6 – some()
let numbers = [1, 3, 5, 7, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log("At least one even:", hasEven);
// Task 7 – every()
let ages = [22, 25, 19, 30];
let allAbove18 = ages.every(age => age > 18);
console.log("All above 18:", allAbove18);

// Task 8 – sort()
let salaries = [50000, 10000, 70000, 30000];

let ascending = [...salaries].sort((a, b) => a - b);
let descending = [...salaries].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);
// Normal sort fails because it sorts numbers as strings.

// Task 9 – Array Conversion
let arr = [10, 20, 30, 40];
console.log("toString:", arr.toString());
console.log("join:", arr.join("-"));

// ================= SECTION 2 – STRING METHODS =================

// Task 10
let word = "Developer";
console.log("Character at index 4:", word.charAt(4));
console.log("ASCII value:", word.charCodeAt(4));

// Task 11
let company = "StacklyCompany";
console.log("Extracted:", company.slice(7));

// Task 12
let userInput = "javaScript";
console.log("Uppercase:", userInput.toUpperCase());
console.log("Lowercase:", userInput.toLowerCase());

// Task 13
let email = "   naveen@gmail.com   ";
console.log("Trimmed:", email.trim());

// Task 14
let message = "Welcome to JavaScript Training";
console.log("Includes JavaScript:", message.includes("JavaScript"));

// Task 15
let movie = "spider-man-no-way-home";
console.log("Split:", movie.split("-"));

// Task 16
let text = "programming";
console.log("First index of m:", text.indexOf("m"));
console.log("Last index of m:", text.lastIndexOf("m"));

// Task 17
let tech = "I love python";
console.log("Replaced:", tech.replace("python", "javascript"));

// Task 18
let filename = "report.pdf";
console.log("Starts with report:", filename.startsWith("report"));
console.log("Ends with .pdf:", filename.endsWith(".pdf"));

// Task 19
let star = "*";
console.log("10 stars:", star.repeat(10));

// ================= FINAL TEAM CHALLENGE =================
let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];

let upperNames = employees.map(emp => emp.name.toUpperCase());
console.log("Uppercase Names:", upperNames);

let highSalary = employees.filter(emp => emp.salary > 40000);
console.log("Salary > 40000:", highSalary);

let firstHighSalary = employees.find(emp => emp.salary > 60000);
console.log("First Salary > 60000:", firstHighSalary);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Salary Desc:", sortedEmployees);