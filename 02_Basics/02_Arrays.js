const heros = ["spiderman", "superMan", "panyapan"];

const heros2 = ["ironman","Thor","Pangyaman"];

// console.log(heros.push(heros2)); // This doenst spread both aarays in one Araay it takes array as a Data(single element) and creates a element array and returns the length "4";

// console.log(heros); // result of the both 

const bothArrays = heros.concat(heros2);// This method will concat both arrays perfectly but theres another method

console.log(bothArrays);

const allHeros = [...heros, ...heros2]; // This is newer mathod to concat both arrays called Speard 

console.log(allHeros);

// Array.flat() is used to flatten nesterd arrays. it returns a new array with all sub-array elements concatenated into it recursively upto the specifed depth.

const arrNest = [1,2,3,[4,5,6],[7,8,[9,10,[11,12]]]];

console.log(arrNest.flat(Infinity));

//Array.from() , Array.of(), Array.IsArray();

console.log(Array.isArray(arrNest)); // it retruns true if the given argument is Array.

console.log(Array.from("Hello")); // It creates an array of the given argument it can be node list or object with specifed key or value array you want 

const score1 = 100; 
const score2 = 200;
const score3 = 300;

const allScores = Array.of(score1,score2,score3); // This creates a new array instance with a variable number of arguments passed into it, makes a new array with the values you give it . you can pass as many values as you want to it . it's like using the 'Array' maker, but with 'Array.of(), it worksa bit differently than Array constructor.

console.log(allScores);
