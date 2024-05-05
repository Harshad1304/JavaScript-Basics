class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {            // "Extends" inherit the values of Passed Object 
    constructor(username, email, password){
        super(username);    // This will set the "this" of "User" to current context to the "Teacher" constructor .. Call the constructor of the parent class (User) to set the username
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const newUser = new Teacher("Harshad Bhoir", "hbhoir@gmail.com", "harshad123" );

console.log(newUser.username)
newUser.addCourse()

const userOne = new User("Omkar");

console.log(userOne.username)

userOne.logMe(); // Calling the logMe method of User instance

newUser.logMe(); // // Calling the logMe method of Teacher instance (inherits from User)

// console.log(newUser === Teacher);
console.log(newUser instanceof Teacher); // Checking if newUser is an instance of Teacher
console.log(newUser instanceof User); //  Checking if newUser is also an instance of User (because Teacher extends User)

//Method Overriding: Although not demonstrated here, if a method is defined in both the parent and child classes with the same name, the method in the child class will override the one in the parent class.