// const isUserLoggedin = true;
// const temprature = 41; 

// <, >, <=, >=, ==, !=, ===, !== 

// if(isUserLoggedin){
//     console.log("User Just LoggedIn");
// }else{
//     console.log("user Not found");
// }; 

// if(temprature<50){
//     console.log("temprature is less than 50");
// }else{
//     console.log("temprature is greater than 50")
// }

// console.log("this is going to execute"); // This log is going to execute anyway becasue its javaScript flow is defined alredy theres no condition to this code 

// const score = 200; 

// if(score > 100){
//     let power = "fly";
//     var weakness = "Apple";
//     console.log(`user power:- ${power}`)
//     console.log(`User Weaknes:- ${weakness}`)
//     }else{
//     }

    // console.log(`user power:- ${power}`); // This is going to give you error because the powre is defined inside blocked scope ((let and const are blocked scope keyWords)) "VAR" is not blocked scoped. checked the below console log.
    // console.log(`User Weaknes:- ${weakness}`);// This will be executed becasue we defined "var" for weakness .  

// const balance = 1000;

// if(balance>500) console.log("Test"), console.log("test2");  // You can directly write your code here without the "{}" This is called as implicit scope , You can use coma "," to write multiple statements. and don't Forget the semicolon ";" after you finish this type of implicit scope ... This is just an example this type of code is not usable in compeny this is bad practice.
 
// const balance = 1000;

// balance > 499 ? console.log("True"):console.log("im false");   You can use tenery opretor to get single line code for if else... Before question mark "?" the code should return ture or false so if its true the statement after that question mark "?" will get executed and if its false then the statement after this "colon" sgin ":" will be executed.

//Nesting Of If Else 

// const balance = 1000; 

// if(balance < 500){
//     console.log("less then")
// } else if(balance<750){
// console.log("Less than 750")
// }else if (balance<900){
//     console.log("Less than 900")
// }else{
//     console.log("Less than 1200")
// }         // This is the basic if else .... Below we will do some reallife examples  


const isUserLoggedin = true; 
const debitCard = true; 
const loggedInFromGoogle = false;
const loggedInfromEmail = false;

if(isUserLoggedin && debitCard && 2===2 ){  // here we are checking multiple statements are true or false in "&&" all the statements should be true otherwise itll return false even if one statement is false for example (2===3)
    console.log("allowed to purchase the fruits")
}   

if(loggedInFromGoogle || loggedInfromEmail ) { // Here if one of the statement is true this will return true in the parantheses and if block will execute here we need atleast one statement true if the first statement is true here javaScript wont check the 2nd statement here itll directly return true and code inside block will execute keep that in mind . 
    // play with the declared values to checks.
    console.log("user logged ");
}