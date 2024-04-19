// REDUCE METOHD!!!!!!!!!!!!!!!!!!!!

const array1 = [1,2,3];

// Writing using return keyWord
// Using the reduce method to compute the total sum of array elements

const array1Total = array1.reduce( ( acc, currVal ) => {  
    // Log the accumulator and current value for each iteration
    console.log(`Accumulator Value is :- ${acc}, Current Value is :- ${currVal} `) 
    // Return the sum of the accumulator and current value
    return acc + currVal ;  
},0); // Initial value of accumulator is set to 0

// Example with implicit return

// const array1Total = array1.reduce( ( acc,currVal ) =>  acc + currVal , 0 )  // This is example using implicit return which makes code shorter and smater but 

console.log(array1Total); // Output the total sum computed using the reduce method

//Explanation of reduce method:

// The reduce method iterates over each element of the array and accumulates a single result.
// It takes a callback function as its first argument. This function receives two parameters: the accumulator (acc) and the current value (currVal).
// The callback function can also take an optional second parameter, which is the initial value of the accumulator. In this case, we've provided 0 as the initial value.
// Inside the callback function, we perform some operation with the accumulator and the current value and return the result.
// The returned value becomes the new value of the accumulator for the next iteration.
// After iterating over all elements of the array, the reduce method returns the final value of the accumulator.
// In your example, you're using reduce to compute the total sum of the array elements by adding each element to the accumulator. The initial value of the accumulator is 0. The console.log statement inside the callback function is used to track the values of the accumulator and the current value during each iteration. 

// Small example of reduce method on shopping cart. 

// Define an array representing the shopping cart, containing objects with course names and prices.
const shoppingCart = [
    {
        courseName: "JavaScript Course",
        price: 2999
    },
    {
        courseName: "CPP Course",
        price: 2999
    },
    {
        courseName: "Data Science Course",
        price: 9999
    },
    {
        courseName: "Mobile Development Course",
        price: 5999
    }

];

const cartTotal = shoppingCart.reduce( (acc,item) => acc + item.price, 0 ) ; // "item.price" Accessing each item price inside that array 

console.log(cartTotal); 