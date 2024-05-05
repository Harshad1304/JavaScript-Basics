const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('async task is complete')
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})


const promiseTwo = new Promise(function(resolve, reject){
  setTimeout(function(){
    
    resolve({username:'Harshad', email:'harsh@gmail.com'})

  },1000)  
})

promiseTwo.then(function(user){
 console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true ; 
        if(!error){
            resolve({username:'harsh1304', Password:1234})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})


promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('The promise is either resolved or rejected ')
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false ; 
        if(!error){
            resolve({username:'js', Password:'sdssd'})
        }else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})

async function consumePromiseFive (){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();