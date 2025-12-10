// //Task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//  Task 2
let i = 2; 

while (i <= 10) {
  console.log(i);
  i += 2;  
}

// // Task 3

let i = 11; 
do {
  console.log(i); 
  i++;
} while (i <= 10);

// //Task 4

let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

// //Task 5

let student = {
  name: "Syed",
  age: 20,
  grade: "A"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

//  Task 7


//  Task 9

 let prices = [100, 20, 55, 50, 60];
 let total = 0;

for(let price of prices){
  total +=price;
}

console.log("Total price:",total);

// Task 10

let students =["Ali", "Sara", "John", "Zara"];

function CheckAttendance(name){
  if(students.includes(name)){
    console.log('{sara,ali,john} is present');
  } else {
    console.log('{zara} is absent');
  } 
}
CheckAttendance("Sara");
CheckAttendance("ali");
