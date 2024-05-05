// // fetch('http://google.com').then().catch().finally()  
// // Read Promises. mdn docs 

// const promiseOne = new Promise(function(resolve,reject){
//    //Do an async task 
//    // DataBase Calls , Cryptography related , network calls 
//    setTimeout(() => {
//     console.log('async task is complete');
//     resolve ();
//    }, 1000); 
// }); 

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// // console.log(promiseOne);

// new Promise( function(resolve, reject){
//     setTimeout(() => {
//         console.log('async task 2'); 
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("async 2 resolved")
// })

// //3rd promise 

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Harshad1304",email:"hbhoir002@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// //Promise 4 

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true; 
//         if(!error){
//             resolve({username:"Harshad",password:"Harshad"}) 
//         }else {
//             reject("ERROR: Something went wrong");
//         }
//     },1000)
// });

// const username = promiseFour
// .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The Promise is either resolved or rejected")
// })

// // console.log(username);
// // Promise 5 

// const promiseFive = new Promise(function(resolve , reject ){
//     let error = true; 
//     if(!error){
//         resolve({username:'Harshad', password: 1234})
//     }else{
//         reject("ERROR: JS went wrong")
//     }
// })

// async function consumePromiseFive( ){
//     try {const response = await promiseFive 
//     console.log(response)
//     } catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive();

// async function getAllUsers ( ){
//     try {
//         const response = await fetch(" http://jsonplaceholder.typicode.com/users ")
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",)
//     }
// }

// // getAllUsers();

fetch('https://api.github.com/users/harshad1304')
.then((response)=>{
    return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
    console.log("Error:- ", error )
})