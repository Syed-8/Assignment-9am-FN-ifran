//Task 2

function greet(name, callback) {
  setTimeout(() => {
    console.log("Hello " + name);
    callback();
  }, 3000);
}

greet("Irfan", function () {
  console.log("Welcome!");
});

//Task 3

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData().then(data => console.log(data));

// Task 4

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

//Task 5

const user = {
  name: "Irfan",
  age: 22,
  city: "Chennai"
};

// Destructuring
const { name, age } = user;

console.log(name);
console.log(age);  

function display({ name, city }) {
  console.log(name + " from " + city);
}

display(user);

// Task 6
function loginCounter() {
  let count = 0; 
  return function () {
    count++;
    console.log(`Login count: ${count}`);
  };
}

const login = loginCounter();

login();  

//Task 7

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("User data loaded");
      } else {
        reject("API failed");
      }
    });
  });
}

fakeApiCall()
  .then(data => console.log(data))
  .catch(error => console.log(error));

//Task 9

let cart = [];

function addToCart(cart, item) {
  return [cart, item]; 
}

cart = addToCart(cart, { name: "Laptop", price: 75000 });
cart = addToCart(cart, { name: "Mouse", price: 500 });

console.log(cart);

//Task 10

function totalPrice(...prices) {
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;
}

console.log(totalPrice(100, 200, 300));      
console.log(totalPrice(500, 150, 350, 200)); 
