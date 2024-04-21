const btn = document.querySelectorAll('.button');
// console.log(btn);

const body = document.querySelector("body");

function colorChanger(colorId){
    body.style.backgroundColor = colorId ;   
}


btn.forEach( (btn)=>{
    
    btn.addEventListener('click',(e)=>{
        colorChanger(e.target.id);
        console.log(e.target.id) // Every time we are clicking we are getting the id so we can use that in function to change our backGround color 
    })

} )

//Here is another approch for the same output but the code is bit lengthy using swtichCases also you can use if else statements too !!

// btn.forEach((btn)=>{
// btn.addEventListener('click',((e)=>{
//     switch (e.target.id) {
//         case 'grey':
//             body.style.backgroundColor = e.target.id;
//             break;
//     case 'white' : 
//             body.style.backgroundColor = e.target.id;
//             break ; 
//     case 'blue' : 
//             body.style.backgroundColor = e.target.id;
//             break ; 
//     case 'yellow' : 
//             body.style.backgroundColor = e.target.id;
//             break ; 
//     case 'magenta' : 
//             body.style.backgroundColor = e.target.id;
//             break ; 
//         default:  body.style.backgroundColor = 'white';
//             break;
//     }
       

// }))   
// })
