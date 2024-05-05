const user = {
    username: "Harshad",
    logingCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from database")
        // console.log(username) // This will give error that username not defined  
        console.log(`username:- ${this.username}`) // This is where we are asking for the current context value so we are getting the actual value
        console.log(this) // "This" will refer the current context in this case the current 'user' Object.
    }
}
 
console.log(user.getUserDetails()); 
console.log(user.username); // This will print harshad without any error because we accesing the object value directly
console.log(this) // When you try to get 'This' Value in global context the vlaue will be empty {} means theres nothing in global context "this" value changes in browser when you consol log in browser it will return you window object 

// what is Constructor Funtion ?'
//A constructor function in JavaScript is a special type of function used to create and initialize objects. It's designed to be called with the new keyword, which instructs JavaScript to create a new instance of an object based on the constructor function's blueprint.
// Key Points about Constructor Functions:
// Blueprint for Objects: Constructor functions serve as blueprints for creating multiple instances of objects with similar properties and methods.
// Naming Convention: By convention, constructor functions are named with an initial uppercase letter to distinguish them from regular functions.
// Initialization: Inside a constructor function, properties and methods can be defined using the "this" keyword, which refers to the newly created object instance.
// new Keyword: When invoked with the new keyword, a constructor function creates a new object instance and sets the "this" keyword to refer to that new instance.

function User(userName,isLoggedIn,logingCount){
    // userName = userName
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.logingCount = logingCount;

    this.greetings = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this; // Even If you dont return anything the function will still return "this" implicitly its javaScript default you can try it by commenting the code
}

const userOne = User("harshad",true,12);
const userTwo = User("Omkar",false,2);

console.log(userOne);
console.log(userTwo); // userOne values are overwriten by userTwo because we are not using the constructor so we need to use "new" keyword to fix this , "new" keyword will give us new instance each time we use it see the example below also it will return only object and avoid extra information which was we were getting in this 2 examples 

const userThree = new User("pratik", true , 10);
const userFour = new User("jayesh", false , 40);

console.log(userThree);
console.log(userFour);
console.log(userFour.constructor); // we are getting 2 different objects now and the object is not giving any extra information. contstructor property is refrence to itself to function

// 01. Whenever we use "new" keyword new object will be created (new intance).
// 02. Then the constructor function is called beacuse new keyowrd it gives all arguments passed and gives you
// 03. All the arguemnts passed in 2nd steps will be injected inside this" keyword. and gets back to you 
// 04. It comes inside function and gives you object with all arguments 

//ChatGpt:- 
// Explanation of the process when using the "new" keyword with constructor functions:
// 01. When the "new" keyword is used, a new object instance is created.
// 02. The constructor function is called with the "new" keyword, leading to the creation of a new object.
// 03. Inside the constructor function, the "this" keyword refers to the newly created object, allowing for the assignment of properties based on the arguments passed.
// 04. Any arguments passed to the constructor function are received as parameters inside the function, facilitating the initialization of properties.
// 05. Once the constructor function finishes executing, it automatically returns the newly created object with initialized properties.