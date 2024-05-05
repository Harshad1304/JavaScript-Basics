//https://excalidraw.com/#json=Ff1vHrkCeHkyFwcb-p0pO,-udBQU3xK9VzhouuEX8YJQ // example proto 

function multiplyByFive(num){
    return num * 5
};

//In JavaScript, functions are indeed objects, which means they can have properties and methods just like any other object. This can sometimes be surprising but offers a powerful way to organize and manipulate code.
multiplyByFive.power = 2 ; // Adding a Property to a Function:
//Here, you've added a property called power to the function multiplyByFive. Unlike most objects in JavaScript, functions can be treated like objects and can have properties assigned to them. This doesn't affect how the function operates but allows you to attach additional data to the function.

console.log(multiplyByFive(5)); //this is not suprising its just a normal function running 
console.log(multiplyByFive.power); // this is prof that functions also are objects so you can manupulate the values and add your own to them (prototype) function can behave like object ..Since power is a property of the function multiplyByFive, you can access it directly. This demonstrates that functions in JavaScript can carry additional information beyond their immediate computational behavior.
console.log(multiplyByFive.prototype); // Empty object ..Every function in JavaScript automatically has a prototype property, which is an object. This prototype object is important when the function is used as a constructor function (with the new keyword). Objects created using new multiplyByFive() would inherit properties from multiplyByFive.prototype.In simple terms, the prototype is a mechanism in JavaScript that allows object properties and methods to be inherited by child objects. For example, if you were to use multiplyByFive as a constructor to create new objects and you add methods or properties to multiplyByFive.prototype, those methods or properties would be available to all instances created from multiplyByFive.
// In your example, since you are not using multiplyByFive as a constructor, the prototype property is just an empty object and doesn't play a role. However, it's crucial for understanding inheritance when you start creating more complex object-oriented JavaScript code.


// JavaScript functions are utilized not just for computation but also as constructor functions to create object instances. This demonstrates a key aspect of JavaScript's versatility and its object-oriented capabilities.

// This function, createUser, is defined as a constructor. It's designed to initialize new objects with two properties: username and score. The use of "this" refers to the new object instance that will be created when the function is called with the new keyword.

function createUser(username ,score){
    this.username = username; 
    this.score = score; 
}


//Adding Methods to the Constructor's Prototype:- 

createUser.prototype.increment = function(){
    this.score ++ 
}

createUser.prototype.printMe = function(){
    console.log(`Price of a tea is ${this.score}`)
} // adding methods to createUser 
    //Methods "increment" and "printMe" are added to the createUser.prototype. This means all instances created using createUser will have access to these methods. This is efficient because the methods are stored only once in memory, and all instances refer to them, rather than each instance having its own copies of the methods.

    
const userOne = new createUser('tea',20); // to tell the fucntions that we got all properties we have added using protoype we need to use new keyword
const userTwo = new createUser('iceTea',250);   

  //Two instances, userOne and userTwo, are created using the new keyword with createUser. This keyword creates a new object, sets the prototype of this object to createUser.prototype, and calls the createUser function with this set to the newly created object. As a result, userOne and userTwo are initialized with usernames and scores.

userOne.increment();
userOne.printMe();

//userOne.increment() calls the increment method, which increases userOne's score by 1. Then, userOne.printMe() calls the printMe method, which prints the message "Price of a tea is 21" to the console. Note that the score is now 21 because it was incremented.


/*
Summary:
This setup exemplifies the use of prototypes for method sharing across instances, which is a core concept in JavaScript for achieving memory-efficient and performance-optimized object-oriented programming. The new keyword is crucial as it binds the "this" in the constructor to the new object, ensuring that each created object maintains its own state but shares methods via the prototype. This example illustrates a simple but powerful pattern for using constructor functions and prototypes to build scalable and efficient applications.
*/


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and "this" is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes "this", the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.



*/
