const socore = 400;

// console.log(socore);

const balance = new Number(10000);

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.5966

// console.log(otherNumber.toPrecision());

const hundreds = 50000000;

// console.log(hundreds.toLocaleString());

// +++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //this will return Math object which contains different math properties and methods 
console.log(Math.abs(-4)); // This will convert any negative value passed as argument into positve and if positive value is passed it wont change 
console.log(Math.round(1.4));// This will round the value depends on the decimails are higher or lower 
console.log(Math.ceil(1.5));// This will always round the value to higher side means itll convert into '2'
console.log(Math.floor(1.6));// This will always round to the lowest side of the passed value mean itll convert into '1'
console.log(Math.min(2,3,4,5,6,7,8,9));  // This method gives us the lowest value of the numbers we indivualy pass.
console.log(Math.max(2,3,4,5,6,7,8,9)); // This method gives us the highest value of the numbers we indivualy pass.
console.log(Math.random());// This will return random values from 0 to 1 in decimals and sometimes 1 or 0 radomly for eg. 0.1113213,0.5454234.etc
console.log((Math.random()*10) + 1 );// This will return random values from 0 to 10 and '+1' will ensure that the value is not zero eg. 1.45454, 6.434343 etc
console.log(Math.floor((Math.random()*10)) + 1 );// This will return random values from 0 to 10 with the rounded value like 1, 2, 3, 5, 10 etc 


const min = 40 ;
const max = 70; 

console.log(Math.round(Math.random() * (max-min +1 )) + min  ); // This method will give us random values from 40 to 70 and we used the formula for that and also this will floor the value





