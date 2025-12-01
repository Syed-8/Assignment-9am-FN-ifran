
// Task 2
console.log(typeof "Hello");       
console.log(typeof 42);            
console.log(typeof true);         
console.log(typeof undefined);    
console.log(typeof null);         
console.log(typeof {name: "Syed"}); 
console.log(typeof [1, 2, 3]);     
console.log(typeof function(){});
console.log(typeof Symbol("id")); 
console.log(typeof BigInt(123)); 

//Task 3

 let person ={
    name:"syed",
    age : 21,
    hobby: "modeling"
 };

console.log(person.name);
console.log(person.age);
console.log(person.hobby);

//Task 4

let num1 = Number("100");
console.log(typeof num1);

//Task 6

let student = {
    name:"syed",
    age:21,
   grade: "A+"
   };

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:",student.grade);

// Task 7

let item1Price = "100";   
let item2Price = "300";   
let item3Price = "500";   

let total = Number(item1Price) + Number(item2Price) + Number(item3Price);

console.log("total price: " + total);

// TAsk 8

let isLoggedIn = true; 

if (isLoggedIn) {
  console.log("Welcome");
}


//Task 9

let biga = 2345789036542391n;
let bigb = 1215487212148487n;

let big = biga + bigb;
let bigg = biga - bigb;
console.log(big);
console.log(bigg);


// Task 10

const userId1 = ("user1");
const userId2 = ("user2");
const userId3 = ("user3");

const user1 = {
  id : userId1,
  name : "irfan",
  age : 21
};

const user2 = {
  id : userId2,
  name :"aisha",
  age : 19
};

const user3 = {
  id : userId3,
  name :"ali",
  age : 30
};

console.log(user1);
console.log(user2);
console.log(user3);



