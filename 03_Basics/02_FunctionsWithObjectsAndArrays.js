// Accesing Objects using Functions

const user = {
    firstName: "Harshad",
    lastName:"Bhoir",
    height: "5'8"
};

function handleObj(anyObj){
    return `Your First Name is ${anyObj.firstName} and Last Name is ${anyObj.lastName} Your height is ${anyObj["height"]}.`; // Using Template Literal here
};

console.log(handleObj(user));// We are acessing values of the object using DOT notation you can also use the brackets "[]" Shown in the example. 

//Also you can directly pass the object while calling the function -> 

console.log(handleObj({
    firstName: "pooja",
    lastName:"Pandey",
    height:"5'2"
})); 

//Accesing Arrays using Functions

const myNewArray = [200,300,400,5600]; // Here is the Array we will use 

function returnSecondValue (arr){  //This function take an Array and returns its 2nd value 
    return arr[1];
}

console.log(returnSecondValue(myNewArray)); // This is the output of our Array Example 

