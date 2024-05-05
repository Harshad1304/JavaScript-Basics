
Object.prototype.truelength = function(){
    const trimmedLenght = this.trim().length
    console.log(`length of ${this} is ${trimmedLenght}`);
    return trimmedLenght
}

let myName = '            Harshad                 ';

"Omkar".truelength(); //We have created and added trueLength() method to Object so we can use it on arrays strings and function ..


console.log( myName.truelength());  // Here we are trying to get the actual length of our word but as you can see we have added spaces to the string so its not going to give you the actual length using (.length) property. we want the actual word length so we are using "trueLength()" method but wait does javaScript has this method inbuilt ? no we have to create that method and assing it to the Object.prototype so its accesible for every Object , array or string because in tree the Object comes 2nd before null (Null -> Object -> Array {child:- Function , String }) 



let myHeros = ["thor", "Superman"];

let heroPower = {
    thor: "hammer",
    supperman: "laser",

    getSuppermanPower : function(){
        console.log(`Superman power is ${this.supperman}`);
    }
}

// Adding our own method to all the Objects using prototype
Object.prototype.infectAll = function () {
    console.log(`i have infected all your ${Array.isArray(this)?'Array':'Object'}`); // Used simple tenery operator to find out that its an object or array :p 
}

heroPower.infectAll(); 

// What if we do this with Array.prototype will this affect Object ? or it will work with only array ?

myHeros.infectAll(); // We can use "infectAll()" Method on Array to even we have added that to Object.prototype .. lets create a method for "Array.prototype" and check that it works with Object or not ........


Array.prototype.infectArrays = function (){                 // Here we have created new method and injected that to Array.prototype.
    console.log(`${Array.isArray(this)?'Array':'Object'} is Getting infected`)
}

myHeros.infectArrays();
// heroPower.infectArrays(); // If you execute this line it will give you an error  
//  when we defined "infectAll()" method in Object.prototype it gave access to everyone string , array , function etc but its because object is higher stage so everyone gose through Object but Array comes after Object so its 2nd in chain so it doesnt affect anyother prototypes only arrays can have "infectArray()" Method  

// Inheritance 

const user = {
    name: 'Harshad',
    email: 'hbhoir002@gmail.com',
    
}

const teacher = {
    makeVideo: true,
    liveStream: 'On Youtube'
};

const teachingSupport ={
    isAvailable: false
};

const taSupport = {
    makeAssingment : "Js Assingment",
    fullTime: true,
    __proto__: teachingSupport      // We are telling the object to get linked to our teachingSupport object so taSupport gets all the properties and its values to it self you can see console log statements  
};


teacher.__proto__ = user
// user.__proto__ = teacher // you cannot inheritance both objects together it create cyclic value its not allowed maybe // // teacher.__proto__ = user: This line sets the prototype of teacher to user, meaning that teacher now inherits properties from user.//Cyclic Prototype Chains: Setting up a cyclic prototype chain (like if user.__proto__ = teacher was allowed when teacher.__proto__ is already user) is not allowed as it creates an infinite loop in the chain, which JavaScript prevents.

console.log(taSupport);
console.log(teacher.name); // prints "Harshad" because teacher inherits from user, where the name property is defined.
// console.log(user.makeVideo);


// Mordern Syntax 

Object.setPrototypeOf(taSupport,teacher) // This bascially doing taSupport.__proto__ = teacher; //This line changes the prototype of taSupport from teachingSupport to teacher. After this operation, taSupport will directly inherit properties and methods from teacher.

console.log(taSupport.liveStream); //prints "On Youtube" because taSupport now inherits from teacher, where liveStream is defined. 


