// Immediately Invoked Function Expressions (IIFE)

// IIFEs are often used to create a new scope, encapsulate code, and prevent polluting the global namespace with variables and functions. They are commonly used in scenarios where you want to execute a block of code once without needing to reuse the function elsewhere in your code.


// Named IIFE when you name a function which is immediately executed.
(function guitar() {
    console.log("tuntuntun");
})(); 
// When you wrap a function and call it immediately using "()",
// it executes right away. This is called an IIFE (Immediately Invoked Function Expression).
// Always remember to put a semicolon ";" after calling an IIFE because it continues the statement.

// IIFE with an arrow function 
((notes) => {
    console.log(`Piano Notes: ${notes}`);
})("C D E F G A B C "); 
// This is an unnamed IIFE. Here, we used an arrow function.
// You can pass arguments inside the function just like any other function.
// The parentheses after the function execute them, and they also accept arguments.

// Explanation:

// An IIFE is a JavaScript function that runs as soon as it is defined.
// It's a way to create a function and immediately execute it without having to call it separately.
// IIFEs are often used to create a new scope and avoid polluting the global namespace with variables.Variables and functions declared inside the IIFE are only visible and usable within that space,***
// In the first example, a named function is defined and immediately called.
// In the second example, an arrow function is used, and arguments are passed to it immediately.
