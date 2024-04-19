// We have seen (&&) and (||) OR operator in 01_controlFlow.js 
// Here are some more new operators.

// Nullish Coalescing Operator (??): This operator is depends on null and undefined output

let val1 ; 

val1 = 5 ?? 10 ; // in some cases while you get data from backEnd and if it retruns nothin (null or undefined) then 10 will work as backup and your code wont be broken 

console.log(val1); // returns 5

let val2 = false ?? 30; // you must be thinking itll return 30 because  first value is falsy but its going to return "false" to the console.

console.log(val2); // Why its returning false ??? because this operator only retruns its optional value when the first input its getting is "null" or "undefined". 

let val3 = undefined ?? 20 // It'll return 20 as we discussed above :p 

console.log(val3);

let val4 = null ?? 10 ?? 20;

// When encountering null, the nullish coalescing operator assigns the next value in line, which is 10. However, since 10 is neither null nor undefined, it remains unchanged, making the final value 10.

console.log(val4); // outputs 10 because 10 comes right after nullish value has been encounterd.


//Here is ChatGpt version for better understanding 

// Nullish Coalescing Operator (??): This operator depends on null and undefined outputs.

// let   val1;

// In scenarios where data from the backend might return null or undefined, 
// the nullish coalescing operator provides a way to set a default value (10) 
// in case the retrieved value is null or undefined. 

// val1 = 5 ?? 10; 

// con?sole.log(val1); // Output: 5

// let val2 = false ?? 30; 

// Despite false being a falsy value, the nullish coalescing operator 
// considers only null or undefined as triggering the default value (30). 
// Since false is neither null nor undefined, it remains unchanged.

// console.log(val2); // Output: false 

// let       
const chaiPrice = 10;

chaiPrice < 30 ? console.log("40 Chai parcle karde bhaiii sasti hai :p") : console.log("rukja 5 min me aata hu ") ;  

// chaiPrice is 10 which is lessThan 30 so it returns true and it'll log the first code before colan just like control if this is true do this else do that.....

// chatGpt explanation 

// chaiPrice is 10, which is less than 30, so this condition returns true.
// Therefore, it'll log the message before the colon: "40 Chai parcle karde bhaiii sasti hai :p"
// This is similar to an if-else statement but in a more compact form. 


//////////////////////// (??) and (?) Theres is big difference in both operators.  