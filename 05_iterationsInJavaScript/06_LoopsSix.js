const condingLang = ["Python","JavaScript","C++","Ruby","Java"];

const values = condingLang.forEach((item)=>{
    // console.log(item); // This is basic console log statement so its going to print to the console nothing else 
    return item; // returns undefined 
});

console.log(values); // You will get 'undefined' 

//Even though you are using return item inside the forEach callback function, it doesn't have any effect on the result. The forEach function always returns undefined. So, values will be undefined.  you can use map method to return each item 


const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (num) => { 
 return num > 4 ;  // We can add our condition here which items we want to return and it will check the condition for each item in array if the item which according to our "num > 4 " evaluates to true this will retrun that value inside new array and it will return us new array .. for eg 1 > 4 false , 2 > 4 false it will not retrun that value .. 
});

console.log(newNums); // This will return all the values according to our callback condition..
;
// if you want to do this same thing with forEach method the process is bit complex ill show u below 

const numsGreaterThanFour = [];  // Declaring an empty array to push GreaterThan Four values using forEach method

const numsLessThanFour = []; // Declaring an empty array to push lessThan Four values using forEach method

myNums.forEach((num)=>{ // call back function  
    if(num>4){          // writing an if else to check and push those values inside our array 
        numsGreaterThanFour.push(num);;
    }else{
        numsLessThanFour.push(num);
    }
})

console.log( "NumSGreaterThanFour",":-",numsGreaterThanFour); // This will return us new array using for each method all the greater than four values
console.log( "NumSLessThanFour",":-",numsLessThanFour); // This will return us new array using for each method all the less than four values

// forEach method is bit lenghty and filter is easy to use. 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 const userBooks = books.filter( (bk)=> bk.genre === "History" ) // we are using implicit return here so no return keyowrd needed check next line for return keyword type example 
 
//  const userBooksPublish = books.filter( (bk)=> {
//      return bk.publish > 1995;
// }).filter((bk)=>bk.genre === "History");

// We have added extra filter method in this code but theres one shorter method to do the same thing ill comment this code and write the simple version 

// Here is the shorter version 

const userBooksPublish = books.filter((bk)=> { 
    return bk.publish > 1995 && bk.genre === "History"; // Here we used (and) operator to add the condition to our return like give me books who are published after 1995 and ( "&&" Operator ) has "History" genre.
})

 console.log(userBooks);

 console.log(userBooksPublish);