

function one (){
    const userName = "Harshad";

    function two(){
        const webSite = "YouTube"

        console.log(userName)
    }

    // console.log(webSite); // We get an error because we're trying to access a variable from the inner function. In JavaScript function scope, you can access values from the outer function in an inner function, but you can't access values from the inner function outside the outer function. if we comment and log we wont get any error here.

    
    two();
}

one();



// Another Example 

if(true){
    let userName = "Harshad"
    
    if(userName === "Harshad"){
        let webSite = "facebook"

        console.log(userName , webSite )
    }

    // console.log(webSite); // Here im trying to access webiste from inner scope in outer scope thats why im getting error. you can uncomment the console.log to see the error.
} 

// console.log(userName) // Same here im triying to aceess the userName variable from IF statement scope thats why getting the error. you can uncomment the console.log to see the error.


// +++++++++++++++++++ Hoisting in Short ++++++++++++++




console.log (addOne(10)) // We are accesing the fucntion before its initialization this is beacasue of javaScript hoisting when we define function directily javascript will take that function to the top of the code and it doenst throw error.

function addOne (num){
    return num + 1 ;
};


// addTwo(10); // Here we are getting error becasue we declared a function insde an variable this is called (function expression)JavaScript doesn't hoist function expressions, so it doesn't recognize addTwo before its definition. it will give us an error itll say you are trying to access before its initializaton. You can uncomment the log to check the error

const addTwo = function (num){
    return num + 2 ;
}

//Function declarations are hoisted to the top of the code, so you can call them before they're defined.
//Function expressions, where you assign a function to a variable, aren't hoisted, so you can't call them before they're defined.

