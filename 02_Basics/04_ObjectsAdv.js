const tinderUser = new Object (); // This is a Singleton object. 

const bumbleUser = {} // This is an Object literal 

tinderUser.id = "123abc";
tinderUser.name = "pangya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// console.log(bumbleUser);

const regularUser = {                                       // Nested Object Example
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Harshad",
            lastName: "Bhoir"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName); //This is how you access the nested objects.. for now there must be some good methods to do this...


// Combining Objects together

const obj1 = {1:"a", 2:"b", 3:"c"};
// const obj2 = {1:"t", 2:"h", 3:"l"};
const obj2 = {4:"d", 5:"e", 6:"f"};

const newobje = Object.assign(obj1,obj2);
console.log(newobje);

// const combinedObj = {...obj1,...obj2}; // this is using spread operator. but theres another method called Object.assing();
// console.log(combinedObj);

const obj5 = {obj1,obj2} // This will combine both objects but it will nest the  other object inside and treated as 2 different obj

// console.log(obj5);

const obj3 = Object.assign( {} , obj1, obj2 ); // This method also does the same it combines both object but here if you dont use "{}" this as target then it will change your original object because the first argument is the target where you want to combine both objects so you "{}" use this curly braces to define the target where you want to put both objects.

// console.log(obj3);
// console.log(obj1);

tinderUser.PhoneNo = 1234567;

console.log(tinderUser);

const objKeys = Object.keys(tinderUser); // This method will give us all the keys from the object in array

console.log(objKeys);

const objValues = Object.values(tinderUser); // This method will give us all values from the object in array

console.log(objValues);

const objEntries = Object.entries(tinderUser); // This method gives us all pairs of Keys : value in array for example ["name","harshad",["email","hbhoir@gmail.com"] ["isLoggedIn", true ]];

// ++++++++++ All of these methods will not change the datatype strings will remain strings and boolean will be remain as boolean and Number will be Number xD just to be clear :p

console.log(objEntries);

console.log(tinderUser.hasOwnProperty("PhoneNo")); // This method will check if the object includes the property we pass as argument here 

