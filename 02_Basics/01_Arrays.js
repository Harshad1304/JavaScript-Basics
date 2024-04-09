const myArr = [1,2,3,4,5];

const myHeros = ["spiderman","pangyaman"];

const myArr2 = new Array(1,2,3,4); // In this delaration method you dont need to add "[]" these brackets.

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

myArr.unshift(9); // Adds "9" To the start of the array this is not optimized method to use but in case :p 
myArr.shift();// This method will remove first element from the Array .

console.log(myArr.includes(9)); //Does not exist so it will return false.
console.log(myArr.indexOf(9)); // Does not exist so it will return -1. otherwise it returns the index of the given parameter 


console.log(myArr);

//Slice , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);
