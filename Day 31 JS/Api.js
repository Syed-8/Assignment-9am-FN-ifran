// Task1   

 An API (Application Programming Interface) is a bridge that allows two application to talk to each other.
 Example in real life :
 You order food using an app sends youtr order to the restaurant the restaurant sends back confirmation.That communication happens using an API.
 In coding 
 A frontend (website/app)uses an API to request data from a sevdr and receive data in response.

 //Task 2

fetch("https://jsonplaceholder.typicode.com/users")
.then(reponse => response.json())
.then (data=>{
    console.log(data);
})
.catch (error =>{
    console.log("error:",error);
});

//Task 3

const user = {
    name:"Irfan",
    age:25,
    city:"chennai"
};

const jsondata = JSON.stringify(user);
console.log(jsondata);

//Task 4

localStorage.setItem("username","Irfan");

const name = localStorage.getItem("username");
console.log(name);

localStorage.removeItem("username");


Task 9

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response failed");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error("Fetch error:", error.message);
  });






