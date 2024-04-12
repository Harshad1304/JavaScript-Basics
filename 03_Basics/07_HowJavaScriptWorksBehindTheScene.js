// JavaScript Execution Context 

// Global Execution Context :- This is going to happnen firstly whenever you pass the code. Whatever code you pass itwill be stored in this context , browser has different "this object"(window Object) , and nodejs has different. 


//Function Execution Context :- 


// Eval Execution Context :- 


//JavaScript Code executes in two phases first is memory creation phase(Creation Phase) and Execution Phase 

// (setps)
// 1. Global execution Context.
// 2.Function Execution Context.
// 3.Eval Execution Context. 

// In memory Creation Phase WHatever variables and anything you declare values of the variables will be undefined itll alot a space for them they wont be executed like plus(+) minus(-) etc these all happens in execution context. follow The Example Below 


// Global execution context will happen first this code will be stored in "this". 

// Memory creation phase starts then
  
let val1 = 10; // in memory creation phase val1 will be stored as undefined val1 = undefined; ,  In  execution phase val1 = 10;
let val2 = 5 // in memory creation phase val1 will be stored as undefined val2 = undefined;  , in execution phase val2 = 5;

function addNum(num1,num2){       //Here addNum will function defenation. in execution phase nothing happens here becase we are not executing the function here , and we have already defined this so nothing will happen here .
    let total = num1 + num2 ;
    return total ;
}

let result1 = addNum(val1,val2); // in memory creation phase resuult1 will be stored as undefined , result = undefined; in execution phase when you reach here another executional context will be created it will create new variable enviroment and execution thread , Whenever you execute function this new variable enviroment and execution thread will be created .. Then inside that new enviroment first memory phase will happen val1 = undefined , val2 = undefined , total = undefined , execution context starts then num1 = 10(val1) , num2 = 5 (val2), total = 15 (will add the values executes it) then total will be returned to the global execution context or parent executional context. *Whenever this new enviroment is created for function itll be deleted after the work is done*. result1 = 15 after deleting.

let result2 = addNum(10,20); // in memory creation phase resuult2 will be stored as undefined , resul2 = undefined; new variable enviroment and them memory phase inside memory phase 


// What is CallStack ? 

// imagine one box inside that box  golabl execution is at the bottem then we call "one()" methhod will execute and goes out of that stack box 
// when you keep one() inside and inside One() you call two() then three() added then theres one word called LIFO which happens here Last in first out so three will go out and then two and then one 

// ChatGpt Explanation: 
// Global Execution Context: This is the first execution context created when your code is run. It's where global variables and functions are declared and accessible throughout your code. In a browser, the global object is window, while in Node.js, it's global.

// Function Execution Context: This is created whenever a function is invoked. Each function call gets its own execution context, which includes its own variable environment, arguments, and a reference to its outer lexical environment (the context in which the function was declared).

// Eval Execution Context: This context is created when code is executed using the eval() function, but its usage is discouraged due to security risks and performance issues.

// Memory Creation Phase:

// This is part of the creation phase of the execution context.
// During this phase, memory space is allocated for variables and function declarations, and variables are initialized with a value of undefined.
// Function declarations are fully stored in memory, so they are accessible and can be invoked later in the code.
// Execution Phase:

// This is the phase where the JavaScript engine starts executing the code line by line.
// Code inside functions is executed here, and variables are assigned their actual values.
// Functions are invoked, creating new function execution contexts if needed.
// Call Stack:

// The call stack is a data structure used by the JavaScript engine to manage function calls and their execution contexts.
// Each time a function is invoked, a new execution context is added to the top of the call stack.
// When a function completes its execution, its context is removed from the stack (LIFO - Last In, First Out).
// The call stack helps keep track of the order in which functions are called and ensures that they execute in the correct sequence.
// Your explanation of the call stack using the analogy of boxes and the LIFO principle is spot on! It helps visualize how functions are added and removed from the stack as the code executes.