
//Task 1

// 1. String
let myString = "Hello, world!";

// 2. Number
let myNumber = 42;

// 3. Boolean
let myBoolean = true;

// 4. Null
let myNull = null;

// 5. Undefined
let myUndefined; 

// 6. Symbol
let mySymbol = Symbol("Student ID");

// 7. BigInt
let myBigInt = 123456789012345678901234567890n;


// Task 2

// 7 primitive types
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;
let mySymbol = Symbol("unique");
let myBigInt = 123456789012345678901234567890n;

console.log(typeof myString);     
console.log(typeof myNumber);     
console.log(typeof myBoolean);    
console.log(typeof myNull);       
console.log(typeof myUndefined); 
console.log(typeof mySymbol);     
console.log(typeof myBigInt);  



//Task 3

let student = {
    name:"syed",
    age:21,
    city:"coimbatore"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.city);


 // Task 4

 let num1 = Number("45");
 console.log(num1);
 console.log(typeof num1);

//Task 5

let str4 = false ;
console.log(str4);        
console.log(typeof str4); 


//Task 6

const studentProfile = {
  name: "Syed",          
  age: 21,               
  grade: "A",            
  rollNumber: 1025,      
  course: "Computer Science" 
};
console.log("Name:",studentProfile.name);
console.log("Age:",studentProfile.age);
console.log( "Grade",studentProfile.grade);
console.log("Roll Number:", studentProfile.rollNumber);
console.log("Course:", studentProfile.course);
 
//Task 7

const product={
   name :"Apple",
   product:"Airpods",
   price : "2500",
   quantity :"5"
};
let priceNum = Number(product.price);
let quantityNum = Number(product.quantity);

let totalcost = priceNum * quantityNum;
let totalcoststr = String(totalcost);

console.log("product:",product.name);
console.log("product:",product.product);
console.log("price(string):",product.price);
console.log("quantity(string):",product.quantity);
console.log("totalcost(number):",totalcost);
console.log("totalcst(string):",totalcoststr);

//Task 9

const bigNum1 = 987654321987654321987654321n;
const bigNum2 = 123456789123456789123456789n;

const sum = bigNum1 + bigNum2;

console.log(sum);



//Task 10

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
  name :"jones",
  age : 19
};

const user3 = {
  id : userId3,
  name :"shaji",
  age : 30
};

console.log(user1);
console.log(user2);
console.log(user3);




















