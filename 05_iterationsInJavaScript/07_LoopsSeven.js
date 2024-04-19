const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map((num)=> num + 10 ); //Using the map method to create a new array where each element is increased by 10, we are creating a new array where its adding 10 to each element of an Array on which its called and returing that to newNums array

console.log(newNums); // This is using map method

//This is using forEach method 

const forEachNumsArray = []; // We are declaring an array first when we use forEach method beacause forEach method does not return. 

myNums.forEach( (num) => {  //writing a callback function
    let total = num + 10 ; // add 10 on each num it loops through and storing it in total variable. 
    forEachNumsArray.push(total) // pushing each value inside array using array method "Push"
} )

console.log(forEachNumsArray);


// The map method creates a new array by applying a function to each element of the original array,
// while forEach method allows you to perform an action on each element of the array but doesn't return a new array.
// Map is usually preferred when you want to transform each element of the array and collect the results in a new array,
// while forEach is used when you need to perform an action or operation on each element without creating a new array.


// Chaining Of Methods.

const numbers = [10,20,30,40,50,60,70,80,90,100];

const chainingMap = numbers
.map( (num) => num * 10 )
.map( (num)=> num + 1 )
.filter( (num)=> num > 400 );

console.log(chainingMap);