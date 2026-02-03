// 1.Welcome Program
// Ask user name using Prompt().
let userName=prompt("what is your name ?")
console.log(userName)

// 2.Console Methods Practice


console.log(500);
console.warn(500);
console.error(500);
console.clear(); 

// 3. Data Type Identification


let str = "JavaScript";
let num = 10;
let bool = true;
let undef;
let nul = null;

console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(bool))
console.log(typeof(undef))
console.log(typeof(nul))


// 4. Arithmetic Operations

let a = 20;
let b = 10;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// 5. increment & Decrement

let c = 5;

console.log("Pre-Increment:", ++c);
console.log("Post-Increment:", c++);
console.log("After Post-Increment:", c);

console.log("Pre-Decrement:", --c);
console.log("Post-Decrement:", c--);
console.log("After Post-Decrement:", c);


// 6. Assignment Operators

let num1 = 10;
num1 += 10;
console.log("After += :", num1);

num1 -= 3;
console.log("After -= :", num1);

num1 *= 2;
console.log("After *= :", num1);

num1 /= 4;
console.log("After /= :", num1);

num1 %= 3;
console.log("After %= :", num1);


// 7. Array Access

let subject = ['english', 'tamil', 'science', 'maths'];

console.log("first element:", subject[0]);
console.log("second element:", subject[1]);
console.log("last element:", subject[subject.length - 1]);
console.log("total elements:", subject.length);


// 8. Modify Array

subject.push("social"); 
subject.pop(); 

console.log("Updated Array:", subject);

// 9. Student Object

let student = {
  name: "Madhu sudhanan",
  age: 27,
  course: "fullstack developer",
  city: "madurai"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);


// 10. Nested Object Practice

let company = {
  name: "stackly",
  trainer: {
    name: "naveenkumar",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.name);
console.log("Trainer Name:", company.trainer.name);
console.log("Trainer Subject:", company.trainer.subject);
