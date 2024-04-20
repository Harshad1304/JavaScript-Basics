// Adding this JavaScript file will make it simpler to understand the code here

//01. 

const selectionById = document.getElementById('title'); //This is goining to store the title value to this variable.

//02.
 
const selectionByClass = document.getElementsByClassName("heading") // This will select element by its className you provide and retrun you the value of that html element and store it in that variable .

//03."Adding this JavaScript file will make it simpler to understand the code here." Mostly used selector 

const querySelector = document.querySelector('h1'); 
// const querySelector = document.querySelector('.heading'); 
// const querySelector = document.querySelector('#title'); 
// const querySelector = document.querySelector('#title'); 
// const querySelector = document.querySelector('input[type="password"]');
// const querySelector = document.querySelector('p:first-child');
// You can use different types of Css selectors in querySelector but remember query selector will all give you the first element it finds with the given elemnt attribute or tag or css selector.

//here you can chain your selectors too check below example         
const myul = document.querySelector('ul');

const turnGreen = myul.querySelector('li');

turnGreen.style.backgroundColor  = 'green'
// turnGreen.style.padding  = '10px'

turnGreen.innerText = "five"

// querySelectorAll 

const tempLiList = document.querySelectorAll('li'); // This gives us node list its like an array but not exactly array you cannot apply array methods on it when you want to change color or apply any styles here you can select perticular element like we used to select in array fo eg tempLiList[2].style.color = "green"
tempLiList[2].style.color = "green" // This will change the text color of our li node lists 2nd elemets to green.//you can use forEach method for that too 

// Applying different background colors to each <li> element using forEach loop

const colors = ['red','green','blue','pink']; // this is colors array 

tempLiList.forEach((li,index)=>{        // We are accesing each "node list" element using forEach method and we are using index for each color to applay differently 
li.style.backgroundColor = colors[index];
})

 
const tempH1 = document.querySelectorAll('h1'); // even theres only single h1 element on the page youll still have to tell the browser which index value you want to access so youll have to use " tempH1[0].style.color = 'purple' "
tempH1[0].style.color = 'purple'; 

const classListOfLi = document.getElementsByClassName("list-item"); // When you select elements using getElementByClassName then you get "html collection" on which we cannot use map or forEach any method in that case we have to convert that "html collection" into array using Array.from() method 

const convertedHTML = Array.from(classListOfLi); // converted into array

// Looping through the array and applying styles to each element.
convertedHTML.forEach((li) => {
    li.style.padding = '10px'; // Adding padding to each element.
    li.innerText = "Harshad"; // Changing the text content of each element to 'Harshad'.
    li.style.textDecoration = "underline overline"; // Adding underline and overline to each element's text.
});