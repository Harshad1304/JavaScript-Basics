
async function getAllUsers(){  
   try{ const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}catch(error){
    console.log(error);
}
}

// getAllUsers();

// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


fetch('http://')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// Abort Controller

//In JavaScript, the AbortController interface allows you to abort one or more DOM requests (such as fetch requests) as and when needed. This is particularly useful when you want to cancel a fetch request that's taking too long or is no longer needed due to changed circumstances.

// Create a new instance of AbortController
const controller = new AbortController();
const signal = controller.signal;

// // Example fetch request
// fetch('https://api.example.com/data', { signal })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the fetched data
//     console.log(data);
//   })
//   .catch(error => {
//     if (error.name === 'AbortError') {
//       console.log('Request was aborted');
//     } else {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });


// when you call fetch() method it creates special queue which is called mircro task queue ... it executes first before other async methods like timeout timeinterval etc .. it is not include in timeout and etc task queue its always creates special mirco trask queue is fast queue or you can say prioritty queue 