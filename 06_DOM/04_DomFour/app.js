const div = document.createElement('div'); // Here we are creating an div inside our memory this will not show on page now .
// const h1 = document.createElement('h1'); // This is just example that you can create any html element using document.cearteElement property 

console.log(div); // logging our element
// console.log(h1); // logging our element

div.className = "main"; // Adding class to our div
div.id = Math.round(Math.random() * 10 + 1); // adding id to our div with random number
div.setAttribute("title","generated title"); // we can add any attribute to our element using setAttribute("attributeName","value") metohd.  
div.style.backgroundColor = "green"; // adding background color to our div
div.style.padding = "12px";  // adding padding to our div
// div.innerText = "Harshad Bhoir"  // setting innerText to our div there is anothor approch below
const addText = document.createTextNode("Harshad"); // adding text using text node element 

div.appendChild(addText); // here we are appending a child to our div using appendChild() method

// document.body.appendChild(div) // here we are apppending the div to our html page "body" 

for(let i = 0; i<100; i++){
    document.body.appendChild(div);
    
}

// Creating a div element
// let div;

// for (let i = 0; i < 100; i++) {
//     div = document.createElement('div'); // Creating a new div element inside the loop

//     // Adding class, id, title, and styles to the div
//     div.className = "main";
//     div.id = Math.round(Math.random() * 10 + 1);
//     div.setAttribute("title", "generated title");
//     div.style.backgroundColor = "green";
//     div.style.padding = "12px";

//     // Adding text content to the div
//     const addText = document.createTextNode("Harshad");
//     div.appendChild(addText);

//     // Appending the div to the document body
//     document.body.appendChild(div);
// }

// creating a reusable function 
function createDiv(count,backgroundcolor,textColor,text){
    for(let i = 0; i < count; i++ ){const div = document.createElement('div');

    div.className = "main";
    div.id = "magic";
    div.style.backgroundColor = backgroundcolor;
    div.style.color = textColor;
    const addText = document.createTextNode(text);
    div.style.padding = "20px";
    div.style.borderRadius = "15px";
    div.appendChild(addText);
    document.body.appendChild(div);}

}

createDiv(50,'purple','blue','I love You')