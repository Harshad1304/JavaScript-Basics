//What is Scope in JavaScript?
// Scope in JavaScript means where in your code you can access certai things like variables or functions.
// There Is 1) Global Scope 2) Local Scope 
// Global Scope :- variables declared outside of any Function or block have global scope. they are accessible from anywhere whitin the program, including inside function and blocks.
// Local Scope :- Variables declared inside a function have local Scope. They are accessible whitin that function only.

// let a = 10 ; 
// const b = 20;
// var c = 30; 

 //If you print above values you wont get any error thats normal but when you declare variable inside an if you cannot access it outside of that if else scope
// Scope is Basically "{}" These brackets look at the below example.

if(true){
let a = 10 ; 
const b = 20;
var c = 30; 
}

// Here if you try to print values from (a) and (b) Youll get error that a is not defined and code will break  but if we comment both a and b console log we wont get any error . because variable (a) and (b) are defined using "let" and "const" and these both are blocked scoped and var is not block scoped that is the only reason we dont use VAR keyWord in Js its prone to errors. 
// console.log(a);
// console.log(b);

console.log(c);


let globalValue= 100;

if(true){
    console.log(globalValue + 2); // We got the output 102 because we declared (globalValue) variable in global scope.
    var varInsideBlockedScope =  "Im just Useless VAR";
    let letInsideBlockedScope =  "Let Me Out :p ";
}

console.log(varInsideBlockedScope); // We wont get any error here because (VarInsideBlockedScope) "var" is not blocked scoped
// console.log(letInsideBlockedScope); // We will get an error here that the (letInsideBlockedScope) is not define Because "let" is a blocked Scoped KeyWord. you can uncomment the console.log statement to see the error.

    




 