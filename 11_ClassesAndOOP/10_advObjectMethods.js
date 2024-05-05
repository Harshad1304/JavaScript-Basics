const obj1 = Object.getOwnPropertyDescriptor(Math,"PI");  //This getOwnPropertyDescriptor take 2 argument first the object and 2nd the "key" of the that object you want to run this metohd on 

// console.log(obj1);


// console.log(Math.PI);

Math.PI = 5; 

// console.log(Math.PI);

const user = {
    name: "Omkar desale",
    price:250,
    isAvailable: true ,

    orderChai: function(){
        console.log("chai nai bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"name")); // first argument is the object and second is the property name we are trying to check

const a1 = Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false  // if we set this to true you can see the output at the line 38 will return you the name value and property too 
})

// console.log(a1); //notice the output it retruns the user object but its not showing name property here because we set "enumerable" value to false so this "name" property is not iterable Object.key() will ignore the name property but you can directly check using  console.log(user.name); or console.log(Object.getOwnPropertyNames(user)). check below console logs ; 

// console.log(user.name);
// console.log(Object.getOwnPropertyNames(user));

for(let [key,value] of Object.entries(user)){

    if(typeof value !== 'function'){
        
        console.log(`${key}: ${value}`);
    }

}