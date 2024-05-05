class User {
    constructor(username) {
        this.username = username;
    }

    logMe (){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`; // Static method to create a unique ID for a user (not dependent on any instance)
    }

}

const Harshad = new User("Omkar");

// console.log(Harshad.createId())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const userOne = new Teacher("Harshad Bhoir", "hbhoie@gmail.com");

userOne.logMe();
// console.log(userOne.createId()); // This line will throw an error because createId is a static method and cannot be called on an instance

//Static Methods: In JavaScript classes, static methods are methods that are called on the class itself, not on instances of the class. They are useful for utility functions or methods that are related to the class but do not depend on specific instance data. In your example, createId is a static method of the User class that returns a hardcoded ID value.
