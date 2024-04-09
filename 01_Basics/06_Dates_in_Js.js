//Dates   

let myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// Using numeric values directly
const myCreatedDate = new Date(2000, 3, 13, 23, 9, 52);
// The parameters are: year=2000, month=3 (April), day=13, hour=23, minute=9, second=52
// Note: When providing numeric values, months are zero-based, so 3 represents April.

// Using a string for parsing
const createNewDate = new Date("04-13-2000");
// The string "04-13-2000" is parsed as: month=04 (April), day=13, year=2000
// Note: When providing a date string, months are represented as two digits starting from 01 for January.


console.log(createNewDate.toLocaleDateString());
console.log(createNewDate.toString());

//TimeStamp //its used to desing quizes or polls to see whos the fastes etc 

const myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(`Today is ${newDate.getDay()} and the year is ${newDate.getFullYear()} and the month is ${newDate.getMonth()+1} `)