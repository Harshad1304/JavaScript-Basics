// Define a function named sayMyName that logs "Harshad" to the console
const sayMyName = function() {
    console.log("Harshad");
}

// Call setTimeout to schedule the sayMyName function to run after 3000 milliseconds (3 seconds)
setTimeout(sayMyName, 3000);

// Define an arrow function named changeTitle that changes the innerHTML of the <h1> element to "JavaScript"
const changeTitle = () => {
    document.querySelector('h1').innerHTML = "JavaScript";
}

// Call setTimeout to schedule the changeTitle function to run after 2000 milliseconds (2 seconds)
const titleChange = setTimeout(changeTitle, 2000);

// Add an event listener to the element with id 'stop'
document.querySelector('#stop').addEventListener('click', (e) => {
    // When the button is clicked, clear the timeout associated with titleChange
    clearTimeout(titleChange);
    // Log "stopped" to the console
    console.log("stopped");
})
