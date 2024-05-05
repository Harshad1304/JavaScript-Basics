// Selecting the start and stop buttons from the DOM
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

// Function to generate a random color
const randomColorGen = () => {
    const hexColor = '0123456789ABCDEF';
    let color = '#';
    // Generating a random hex color code
    for (let i = 0; i < 6; i++) {
        color += hexColor[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Variable to store the interval ID
let intervalId;

// Function to start changing the background color
const startChangingColor = () => {
    // Check if interval is already running
    if (!intervalId) {
        // Setting an interval to change the background color every second
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColorGen();
        }, 1000);
    }
}

// Adding event listener to the start button
startBtn.addEventListener('click', startChangingColor);

// Adding event listener to the stop button
stopBtn.addEventListener('click', (e) => {
    // Clearing the interval when stop button is clicked
    clearInterval(intervalId);
    // Resetting the intervalId variable
    intervalId = null;
});