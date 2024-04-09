// Singleton :- when you make object using constructor its singleton object. another is object literals  both creates object only difference is singleTon

// Object.create This is constructor method (singleTon object)

// Object literals


const mySym = Symbol("key1"); // Adding symbol to object

const jsUser = {
    name: "Harshad",
    "full name": "Harshad Bhoir",
    [mySym]: "myKey1",
    age: "23",
    location: "Mumbai",
    email: "hbhoir002@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser["email"] = "hbhoir002@google.com"; // using This basic you can change the object properties.

// console.log(jsUser);

//Freez the object 

// Object.freeze(jsUser); // If you do this the object will be freezed and you cannot manuplutae its values.

jsUser["email"] = "hbhoir@microsoft.com";

console.log(jsUser); // out wont change to new email because we used freeze method on that object. 

jsUser.greeting = function(){
   console.log("Hello Bhai")
};
jsUser.greeting2 = function(){
   console.log(`Hello ${this["full name"]}`)
};



console.log(jsUser.greeting); // This returns a function doenst execute it. 
console.log(jsUser.greeting()); // This executes the function and returns the value. 
console.log(jsUser.greeting2());