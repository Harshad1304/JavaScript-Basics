const user = {
    userName: "harshad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to the website`);
        console.log(this); // "this" here refers to the current object (user) because it's inside a method of the object
    }
}

user.welcomeMessage(); // Outputs: harshad, Welcome to the website

user.userName = "manisha"; // Changing the userName property of the user object

user.welcomeMessage(); // Outputs: manisha, Welcome to the website
// Since the function is called in the context of the user object, "this" refers to the user object

console.log(this); // Here "this" refers to the global object, which is an empty object in this example
// In a browser environment, the global object would be the "window" object

function chai(){
    let userName = "harshad";
    console.log(this.userName); // "this" doesn't point to any object in this case, so userName is undefined
    // In this function, "this" isn't explicitly bound to anything, so it defaults to the global object (or undefined in strict mode)
}

chai(); // Outputs: undefined

// Another example using a function expression

const coffee = function(){
    let userName = "coffee";
    console.log(this.userName); // "this" doesn't refer to an object, so userName is undefined
    console.log(this); // "this" is also not explicitly bound, so it defaults to the global object
}

coffee(); // Outputs: undefined

// Example using an arrow function

const greenTea = () => {
    let userName = "GreenTea";
    console.log(this.userName); // "this" in an arrow function refers to the enclosing lexical context, which is the global object
    console.log(this); // "this" in arrow functions behaves differently, it retains the value of "this" from its surrounding code
}

greenTea(); // Outputs: undefined

//Explanation:

// this behaves differently depending on where it's used:
// Inside a method of an object, this refers to the object itself.
// In a regular function, this defaults to the global object (or undefined in strict mode), unless it's explicitly bound to another object.
// In an arrow function, this retains the value of this from the surrounding code (lexical context), regardless of how or where it's called.


// Normal Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(5, 5)); // Outputs: 10

// Implicit Return arrow function 
const addThree = (num1, num2, num3) => num1 + num2 + num3;
// If you find this confusing, you can use parentheses like below example.
// const addThree = (num1, num2, num3) => (num1 + num2 + num3); // Implicit return using parentheses.
// If you use "{}" curly braces you'll have to use the "return" keyword to return something from that function.

console.log(addThree(1, 2, 3)); // Outputs: 6

// If you want to return any object using implicit return you'll have to use parentheses 
const addObj = () => ({ userName: "harshad" }); // Without parentheses, it'll return undefined

console.log(addObj()); // Outputs: { userName: "harshad" }

//Explanation:

// Arrow functions can have implicit returns if the function body is a single expression.
// If you're returning an object using an implicit return, wrap the object literal in parentheses to avoid confusion with the function body.
// If you need to have multiple statements or want more clarity, you can use curly braces and include a return statement.

//Example use of arrow function in map method 
// const myArray = [2,3,4,5,6,7];
// console.log(myArray.map((a)=>a+a));
