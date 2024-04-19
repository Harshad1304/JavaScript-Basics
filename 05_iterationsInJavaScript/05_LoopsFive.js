// forEach method

const coding = ["JavaScript","Ruby","Java","Python","CPP"]; 

coding.forEach( function ( item ) { // forEach method expects a call back function to iterate 
    console.log(item) // this is going to log each element inside that array 
} )

// you can also use arrow function for the same method

// coding.forEach( (lang)=>{
//     console.log(lang);
// })

function printMe (item){
    console.log(item)
}

coding.forEach(printMe); // This is accepting print me function but notice we are not doing this ( printMe() ) we are not using "()" parentheses inside that forEach method doing this will cause error in code we are only giving the refrence of that function. 


coding.forEach( ( item , index, array )=>{
    console.log(item,index,array); // This will log us each element of that array and Index of that element and whole array 
} )


const myCoding = [
    { languageName : "javaScript",
    languageFileName: "js"},
    { languageName : "java",
    languageFileName: "java"}, 
    { languageName : "python",
    languageFileName: "py"}
]

myCoding.forEach((item)=>{
    
    console.log(item.languageFileName); // This is going to log us properties named with LanguageFileName you can also use "item["languageFileName"]" This syntax

})

