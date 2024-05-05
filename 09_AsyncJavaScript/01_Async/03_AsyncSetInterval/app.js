
const sayMyName = (name)=>{
    // console.log(name);
    console.log(name,Date.now());
}

let intervalId ; // This variable is declared to hold the ID of the interval timer that we'll set up. because clearInterval take ID as an argument to work with that we need to store the return of the interval here 

const intervalFn = ()=>{

    intervalId = setInterval(sayMyName,1000,"Harshad"); // Here the harshad is the argument which we are passing to the function directly here you can do that .
}

const stopIntervalFn = ()=>{
    clearInterval(intervalId) ;
};

document.querySelector('#start').addEventListener('click',intervalFn)

document.querySelector('#stop').addEventListener('click', stopIntervalFn);

// Explanation:

// sayMyName Function: It's a function that takes a name and shows it along with the current time (using Date.now()).
// intervalFn Function: It sets up an interval timer that repeatedly calls sayMyName("Harshad") every second. It stores the ID of the interval timer in the variable intervalID.
// stopIntervalFn Function: It stops the interval timer using the ID stored in intervalID.
// Event Listeners: These listen for clicks on the start and stop buttons. When the start button is clicked, intervalFn is called to start the interval timer. When the stop button is clicked, stopIntervalFn is called to stop the interval timer.