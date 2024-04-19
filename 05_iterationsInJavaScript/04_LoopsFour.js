const myObject = {
    js: 'JavaScript',
    CPP: 'C++',
    rb: 'Ruby',
    swift: "swift by Apple"
}

// for...in loop 

for(const key in myObject){
    console.log(`${key} Shortcut is for ${myObject[key]}`);
}
console.log (myObject["js"]);  //this is the simple explanation for above loop (myObject[key]);


// for...in loop on array. 

let arr = ['js','cpp','swift','ruby'];

for(const key in arr){
    // console.log(key); // this will print key (0,1,2,3)
    console.log(`${key} ${arr[key]}`); // see here output is "0 js , 1 cpp" so its printing index values which refers to key in array  
}

//Explanation: This loop prints the index-value pairs of the array. However, it's generally discouraged to use for...in with arrays due to potential unexpected behavior, such as iterating over non-numeric properties.

// for...in loop on Map() Object. 

// const map = new Map(); 

// map.set('IN','India');
// map.set('FR','France');
// map.set('USA','United States of America');

// for(const key in map){
//     console.log( key ); 
// }                                            // This won't log anything because Maps are not iterable with `for...in` loop.
                                                // Explanation: Unlike objects, Maps are not directly iterable with for...in loops. Attempting to use for...in with Maps won't produce the expected behavior. Instead, use for...of loop or forEach() method for iterating over Map entries.

                                                