// loops we are going to study now are Mostly Array specific.

// for of loop 

const arr = [1,2,3,4,5];

for (const key of arr ) { 

    console.log(key);

}

// Explanation:
// This loop iterates over each element of the array 'arr'.
// In each iteration, the value of the current element is assigned to the variable 'key'.
// Then, it logs the value of 'key' to the console.
// It's a convenient way to iterate over arrays without needing an index variable.


const greetings = "Hello Worlds"; 

for (const greet of greetings) {
    if(greet === " ") continue ; // Small use of continue keyword. (try using "break" keyWord) ( Skips iteration if the character is a space)
    console.log(`Each Char is ${greet}`);
}

// Maps 

const map = new Map(); 

map.set('IN','India');
map.set('FR','France');
map.set('USA','United States of America');
map.set('IN','India') // In map it doesnt copy or allow same values itll not consider the same value is there in map object. 
                    //(Duplicate keys are not allowed; it will not consider this as a new entry.)
console.log(map);

// Explanation:
// Maps are key-value pairs where each key can only occur once.
// In this example, we create a Map 'map' and set several key-value pairs.
// Even if 'IN' is set twice, Maps do not allow duplicate keys, so it's treated as a single entry.
// This demonstrates the uniqueness of keys in Map objects.

// You can print map values using for...of loop;

for (const key of map){
    console.log(key) // This is going to give you an Array. with key and value pairs ['IN',India],['USA','United States Of  America']  
}

//You can print Key and value differently using Destructuring of an Array 

for(const [key, value ] of map ){
    console.log(key, "-: ", value); // this will give you key and value seprated like IN :- India .. etc
}

// Explanation:
// This loop iterates over each entry (key-value pair) in the Map 'map'.
// It uses destructuring to assign the key to 'key' and the value to 'value'.
// Then, it logs each key-value pair to the console.
// It's a way to iterate over Map entries and access both keys and values simultaneously.

// Map object is Iteratable but normal Object cannot be iterate using for...of loop 
//When you try to use a for...of loop with a normal object (like the obj in the second example), it throws a TypeError because normal objects are not iterable by default.