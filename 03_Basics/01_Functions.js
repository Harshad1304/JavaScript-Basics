// Functions :- A function in javaScript is a block of reusable code that performs a specific task or calculates a 
// value. Fucntions are fundamental building blocks in javaScript programming and used to organize code, make it more modular and promote reusability.

function sayMyName (){
    console.log("Harshad hello");
}
sayMyName(); // sayMyName <- this without paranthesis is Function referance and sayMyName() <- with paranthesis is a function execution.

console.log(sayMyName()); // Why Undefined after value?? Because the function "sayMyName" itself is not returning any value explicitly.
//in javaScript, WHen a function does not have a 'return' statement or the 'return' statement does not specify any value to return, the function will return 'undefined' by default. 

function addTwoNumbers(number1,number2){ // When defining a function the values that you place inside the parentheses are called parameters.
    console.log(number1 + number2)
};

addTwoNumbers(1,4); // Here we are passing some values inside parentheses are called arguments. arguments refer to the actual values that are passed to a function when it is invoked.Arguments are the actual values passed to the function when it is called.

const result = addTwoNumbers(45,45); // if we log this now we will get undefined because we are not returning anything to this function. the 'Return' Statement does not Specify any value. 

function sumOfTwoNumbers(a,b){
    return a + b ;
}

const result2 = sumOfTwoNumbers(45,56);

console.log('Result2 :',result2);  // This will return us the value not 'undefined' because we have passing the total to the 'return' statement .
//IMP however if you notice the console here you can see its logging the value 5 , 90 , 101 etc we are storing the fucntion to variable called 'result' but you can see we are nit loging the "addTwoNumbers(45,45) we are storing them inside variable called "result", Why are we getting the "90" as logged in console ? because if you check the function we are doing console.log insde that fucntion so when you store that in any variable its loging the fucntion and if you check the value of that result variable it'll give you undefined because we are not "returning" anything. 

function callMe (a,b){
    return a - b; 
    console.log("harshad")   // Related to 'return' KeyWord:-  This is not going to execute because after return function stop when it reaches there. When a 'return' statement is encountered whitin a function, it immediately stops the execution of the function and returns the specified value. any code after the 'return' statement will not be executed/
}


const example = callMe(10,4);
console.log(example);
 


// Default values as Parameter

function loginUser(username = "harshad"){   //Here after username i have passed default value so if userName is not passed while invoking the function this default value will be used 
    return `${username} just logged in ` //Used Template literals "${}" inside this you can put variables direct and its converted into "string" instead of writing complex code like  (         return username + " "+ "just logged in";             )
}

console.log(loginUser("nishant"));// We are passing the argument here so default value will be overwritten.
console.log(loginUser()); // We are not passing the arguments so the default value is used in the return statement.
