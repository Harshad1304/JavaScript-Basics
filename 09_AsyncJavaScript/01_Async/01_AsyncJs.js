// JavaScript is Synchronos language everything will be done synchronosly 
// JavaScript is Single threaded language but it will never make you feel like that 
// there always will be runtime enviroment or something javaScript to support the js engine..  will never work alone there willl be browser enviroment invole or something As Default

// What is Execution context ? 
// An execution context in JavaScript is like the environment in which your code runs. It includes everything necessary to execute your code: variables, functions, scope, and the value of this.

// To explain it more simply:
// Imagine you're cooking in a kitchen. The execution context is like the kitchen itself, with all its ingredients, utensils, and appliances ready for you to use. Each time you start cooking something new, you create a new context, just like when you run a new piece of JavaScript code, it creates a new execution context.
// There are three types of execution contexts in JavaScript:
// Global Execution Context: This is the default context, representing the entire script. It's like the main kitchen where you prepare all your meals.
// Function Execution Context: Each time you call a function, a new execution context is created for that function. It's like creating a new workspace in the kitchen to prepare a specific dish.
// Eval Execution Context (less common): When using eval(), a special kind of execution context is created. It's like a temporary kitchen setup where you experiment with new recipes.
// Each context has its own set of variables, functions, and scope chain, which determines which variables and functions are accessible from within that context. When a function is called, a new context is created and added to the execution stack (called the "call stack"). Once the function finishes executing, its context is removed from the stack.
// Understanding execution contexts is crucial for understanding how JavaScript manages scope, variable access, and function execution.

// our code will be executed one by one  if you do console.log(1) , console.log(2) one will executed first then 2nd like in thread etc etc basic .

// what is call stack and memory heap ?

// The call stack and memory heap are two important concepts in JavaScript, related to how the language manages memory and executes code.

// Call Stack:
// The call stack is a data structure that keeps track of the execution of functions in your code.
// Every time a function is called, a new frame representing that function is pushed onto the top of the call stack.
// When a function completes its execution, its frame is popped off the call stack.
// The call stack operates on a Last In, First Out (LIFO) basis, meaning the last function called is the first to finish.
// If the call stack becomes too large (e.g., due to recursive function calls or deeply nested function calls), it can lead to a "stack overflow" error.
// Here's a simple analogy:

// Imagine the call stack as a stack of plates. Each plate represents a function call.
// When you call a function, you add a plate to the stack. When the function finishes, you remove its plate.
// The plate at the top of the stack is the function currently being executed.
// Memory Heap:
// The memory heap is where memory allocation happens for objects and variables.
// It's a large, unstructured region of memory where JavaScript allocates memory dynamically during runtime.
// Objects and variables are stored in the memory heap when they are created.
// The memory heap is where complex data structures like objects and arrays reside.
// Unlike the call stack, the memory heap is not managed in a strict order; memory is allocated and deallocated dynamically as needed.
// Here's a simple analogy:

// Think of the memory heap as a vast, open field where you can place objects (like houses or cars).
// When you create a new object or variable, you place it somewhere in this field.
// JavaScript's garbage collector periodically checks the heap to identify and remove objects that are no longer in use (i.e., no longer referenced by any part of your code), freeing up memory for new allocations.
// Understanding the call stack and memory heap is essential for understanding how JavaScript manages memory and executes code efficiently.


// What is Blocking code and non Blocking code  ? This is synchorons and asynchornos code 
// for example its like doing specific task in sync one by one like you if you have given some work like  "download a file on computer and make tea  and bring tea and bring water" so if you think its an blocking code then you will do this in steps like you will wait till the downloading is completed of that file then you will go and make tea then youll bring that tea and then you will again go and bring water.
// But inside "Non Blocking code" you will start the file download while file is downloading youll go and keep tea on stove to boil and while tea is boiling youll fill the glass with water and then youll bring tea and water to your table till then the download will also be completed.

// Read file Sync (Blocking Code).. -: JavaScript will read the file till then it cannot do anything unless reading of that file is done your code will stuck there till its completed

//Read file Async (Non Blocking Code).. -: Here the javaScript Will allow you to do your other executions while its reading the file so you wont stuck here and code will keep executing 
 
// What is Js Enging ? Web API node API ? Async API
// JavaScript engine, Web APIs, Node APIs, and Async APIs are all key components of JavaScript environments, whether in web browsers or in Node.js.
// JavaScript Engine:
// The JavaScript engine is the core component responsible for executing JavaScript code.
// In web browsers, popular JavaScript engines include V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari).
// In Node.js, V8 is the default JavaScript engine.
// The engine parses JavaScript code, converts it into executable instructions, and executes those instructions.
// Web APIs:
// Web APIs are provided by the browser environment and allow JavaScript to interact with web browser features.
// Examples of Web APIs include the DOM API (for manipulating HTML and CSS), Fetch API (for making network requests), setTimeout() and setInterval() (for scheduling asynchronous tasks), and many others.
// These APIs are not part of the JavaScript language itself but are provided by the browser environment to enable web development.
// Node APIs:
// In the Node.js environment, Node APIs are similar to Web APIs but are specific to Node.js.
// They provide additional functionality beyond what is available in standard JavaScript, such as file system operations (fs module), networking (http module), and more.
// Node APIs allow JavaScript to interact with the operating system, file system, and other low-level functionalities.
// Async APIs:
// Async APIs refer to asynchronous APIs that allow JavaScript to perform non-blocking operations.
// These APIs enable JavaScript to execute tasks asynchronously, without blocking the main thread.
// Examples include setTimeout(), setInterval(), fetch(), and asynchronous functions using promises or async/await syntax.
// Async APIs are crucial for handling I/O operations, such as fetching data from a server or reading files from disk, without causing the application to freeze or become unresponsive.
// In summary, JavaScript engines execute code, Web APIs provide browser-specific functionality, Node APIs provide Node.js-specific functionality, and Async APIs enable asynchronous operations in JavaScript. Together, they form the foundation of JavaScript environments in both web browsers and Node.js.


// Task queqe :- In JavaScript, a task queue (also known as the event queue or message queue) is a data structure that manages asynchronous tasks. When you execute asynchronous code, such as using setTimeout(), setInterval(), or making AJAX requests, these tasks are placed in the task queue rather than being executed immediately.
// JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it can handle asynchronous operations efficiently by offloading them to the browser's APIs, like the DOM API or the Web API (for timers, AJAX requests, etc.). Once these asynchronous operations are completed, their associated callback functions are pushed into the task queue.
// The event loop is responsible for continuously monitoring the call stack and the task queue. When the call stack is empty (i.e., there are no synchronous tasks to execute), the event loop checks if there are any tasks in the task queue waiting to be processed. If there are, it moves them from the task queue to the call stack, where they can be executed.
// This mechanism allows JavaScript to handle non-blocking I/O operations effectively, ensuring that the UI remains responsive and other asynchronous tasks can be executed without blocking the main thread.



// Promises (high priority queqe) :-   
// Promises in JavaScript are a way to handle asynchronous operations more elegantly and with better control flow compared to traditional callback functions. While they don't necessarily operate in a "high priority queue," they do represent a mechanism for handling asynchronous tasks effectively.
// Here's a breakdown in simpler terms:
// Imagine you're waiting for a package to arrive. With traditional callbacks, you'd tell the delivery person to ring your doorbell when the package arrives. Then, you'd have to wait there until the doorbell rings to know it's arrived.
// With promises, it's like ordering a package online with a tracking number. You place your order (the promise), and the seller gives you a tracking number (a promise object). You can carry on with your day, knowing that when the package arrives, you'll be notified. When the package does arrive, you can then handle it in a way you've specified beforehand, like displaying a message or processing the contents.
// So, promises help you manage asynchronous operations by providing a more structured and readable way to handle their results or errors. They allow you to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain.

// What is fetch() api (high priority):- The fetch() API is a modern, powerful tool in JavaScript for making network requests (like fetching data from a server or sending data to it). It's not inherently associated with a "high priority" queue, but it does provide a way to perform HTTP requests in a more flexible and streamlined manner compared to older methods like XMLHttpRequest.
// Here's a simplified explanation:
// Imagine you're sending a request for information to a library. With fetch(), it's like filling out a request form online and submitting it. You specify what information you need (like a specific book), and once the library processes your request, it sends back the book or information you asked for.
// Using fetch(), you can make requests to servers and handle the responses in a more modern, promise-based way. It's particularly useful for fetching data from APIs or interacting with server-side resources in web applications.
// However, it's worth noting that the priority of a fetch() request depends on various factors such as the browser's internal scheduling mechanism, network conditions, and the overall workload of the browser. While some browsers may prioritize network requests, including those made with fetch(), they typically don't operate in a separate "high priority" queue by default.




//                          ********************in simple and ChatGpt explanation :- **************************

// JavaScript is a synchronous language, meaning everything is executed in order, one after the other.
// However, it doesn't feel single-threaded because it always has other tasks, like browser interaction, happening alongside.

// Execution context is the environment in which JavaScript code runs. It includes the Variable Object and the Scope Chain.

// The call stack manages the execution of function calls, pushing new frames when functions are called and popping them when they return.

// The memory heap is where dynamically allocated memory, like objects and closures, is stored.

// Blocking code stops further execution until it's complete, while non-blocking code allows other code to run concurrently.

// JavaScript engines execute JavaScript code, while Web APIs and Node APIs provide additional functionality.

// Async APIs enable asynchronous behavior in JavaScript, handling tasks like callbacks, promises, and async/await syntax.

// The task queue manages asynchronous tasks, executing them in the order they were added.

// Promises represent values that may be available now, in the future, or never, useful for asynchronous programming.

// The `fetch()` API is used for making asynchronous network requests, commonly fetching resources from servers.








console.log(1); 

setTimeout(() => {
    console.log(2)
}, 0);

console.log(3); 


// const hexValues = "0123456789ABCDEF";

// let color = "#";

// for(let i = 0; i < 6 ; i++){
//     color +=  hexValues[Math.floor(Math.random() * 16)];
// }

// console.log(color);