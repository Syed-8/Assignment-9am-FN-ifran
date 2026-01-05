//Task 1

function showMessage( callback){
    setTimeout(()=> {
        callback("Hello this message appears after 3 seconds");
    },3000);
}

showMessage(function(msg){
    console.log(msg);
});

//Task 2

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}

getData()
.then(data => console.log(data));


//Task 3

const latePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  }, 2000);
});

latePromise
.then(result => console.log(result));


//Task 4

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 2000);
});

errorPromise
  .catch(error => console.log("Error:", error));


//Task 5

 Promise version 
function fetChData() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data fetched");
        },2000)
        
    });
}

fetChData()
.then(data => console.log(data));

Async / Await version 

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchDataAsync();

// Task 6

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    }catch (error) {
        console.log("Error occured:",error);
        
    }
} 

fetchData();

//Task 7

function randomPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    setTimeout(() => {
      if (success) {
        resolve("✅ Operation successful");
      } else {
        reject("❌ Operation failed");
      }
    }, 1000);
  });
}
 
//Task 8

randomPromise()
  .then(result => {
    console.log(result); 
    return "Next step completed";
  })
  .then(nextResult => {
    console.log(nextResult);
  })
  .catch(error => {
    console.log(error);
  });

// Task 9

function promiseOne() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Promise One done"), 2000);
  });
}

function promiseTwo() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Promise Two done"), 1000);
  });
}

async function waitForBoth() {
  const result1 = await promiseOne();
  const result2 = await promiseTwo();

  console.log(result1);
  console.log(result2);
}

waitForBoth();

//Task 10

async function demo() {
  console.log("Start");

  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("After 2 seconds");

  console.log("End");
}

demo();

