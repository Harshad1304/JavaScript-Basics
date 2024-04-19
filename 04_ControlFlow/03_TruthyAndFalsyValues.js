// const userEmail = "hbhoir002@gmail.com"; //
const userEmail = ""; // Even space is considered as true so be careful.

if(userEmail){              // Here If you can see we are not checking if the condition we passed inside parantheses is true or not but still we are getting true .
                            // Because if string exist then itll be considered as true and empty string is always conidered false value .
    console.log("got user Email");
}else{
    console.log("User email not found");
}


// Falsy Values :- 
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n 
// 5. "" (empty string)
// 6. null 
// 7. undefined
// 8. NaN

// Truthy Values :- 
// 1. "0" (zero inside String is conidered as Truthy just for interview purpose this is tricky question);
// 2. "flase" we are here giving input to the string so false here is considered as string inside "" quotes.
// 3. " " here this is also true because space is there inside string.
// 4. [] empty array is also truthy.
// 5. {} empty object is also truthy. 
// 6. function(){} empty funtion is also a truthy value.

// How to check if array is empty 

const arr = []

if(arr.length === 0){
    console.log("array is empty")
}else{
    console.log("array is not empty")
}

// How to check if an Object is empty

const objj = {};

if(Object.keys(objj).length === 0 ){ // Object.keys() this method gives us object keys In Array so its basically returning an Array thats why we can check the length .. Remember (.length ) cannot be used on Object directly so we using it this way.
    console.log("Object is Empty")
}else{
    console.log("Object has some values")
};

// Some more intreasting things 

console.log(false == 0) ; // This returns true .

false == ""  // empty string (no space is there if you add space itll become non empty string ) this also returns true.

0 == '' // This also returns true. 
 
