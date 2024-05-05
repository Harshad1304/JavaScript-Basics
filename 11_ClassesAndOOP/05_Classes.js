// ^After ES6 Before ES6 It was not Availible 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email  = email;
        this.password = password;
    }
    
    encryptPassword(){                                      //This encryptPassword is just like defining function or adding method to prototype of our object we create using this User contrustor method in this syntext we dont need to write "User.prototype.encryptPassword = function(){return `${this.        password}Abcdes`}" 
        return `${this.password}Abcdes`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }

}

const newUser = new User("Harshad", "hbhoir002@gmail.com", '1234');

console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());


// Behind the scene

function UserOne (username, email, password){
this.username = username ;
this.email = email;
this.password = password;
}

UserOne.prototype.encryptPassword = function() {
    return `${this.password}ABSDADADA`
}

UserOne.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const newUserTwo = new UserOne("Omkar", "hbhoir002@gmail.com", "Harshad");

console.log(newUserTwo.encryptPassword());
console.log(newUserTwo.changeUserName());


