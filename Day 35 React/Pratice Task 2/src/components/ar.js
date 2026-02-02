// What is State ?
// state is a built in object in react that is used to store and manage data that can be change over time 

//When the state changes,react Re renders the components to update the UI
// * state is mutable 
// * state is local to components 
// * state is managed using useState hook in functional components


<button onClick={handleClick}>Click Me</button>

function handleClick(){
    alert("Button Clicked");
}