// Task 1
function greetMorning(name) {
    console.log("Good morning");
}

greetMorning();

// Task 2

function printSum (a,b){
    let sum = a + b;
    console.log(sum);  
}
printSum(5,10);
printSum(20,30);

// Task 3

function square(num){
    return num * num;
}
console.log(square(5));
console.log(square(10));

// Task 4

let multiply = (a, b)=>a*b;{

    console.log(multiply(4,5));
    console.log(multiply(6,2));
}
    
Task 5
 function form(name="student"){
    console.log("Hello " + name);
 }
    form();
    form("syed");
    form("ziya");

// Task 6

function add(a,b){
    return a + b;
}
function subtract (a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
console.log("add:",add(10,5));
console.log("subtract:",subtract(50,38));
console.log("multiply:",multiply(6,7));
console.log("divide:",divide(20,4));

// Task 7

function welcome(name) {
  return `Welcome, ${name}`;
}

console.log(welcome("rizwan"));   
console.log(welcome("aishu"));   
console.log(welcome("Alisha"));    

// Task 8

function getGrdae(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    }
    else if (marks >= 70) {
        return 'C';
    }
    else if (marks >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}

console.log(getGrdae(95));
console.log(getGrdae(82));
console.log(getGrdae(76));
console.log(getGrdae(65));
console.log(getGrdae(50));

// Task 9

function getArea(length, width) {
    return length * width;
}
console.log(getArea(5, 10));
console.log(getArea(7, 4));

// Task 10

function  login(username,password){
    const correctuser="admin";  
    const correctpass="12345";

if (username===correctuser && password===correctpass){
     return "Login successful"
}else {
    return "Invalid username";
} 
}
console.log(login("admin","12345"));
console.log(login("12345","admin"));
console.log(login("admin","wrongpass"));    