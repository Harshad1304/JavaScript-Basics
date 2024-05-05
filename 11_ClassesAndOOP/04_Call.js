// In global execution context the "this" keyword refers to windowObject if its available otherwise in node enviroment it refers to {} empty obejct  

function setUsername(username){
    //complex DB calls 
    
    this.username = username;

    console.log("called");
}

function CreateUser(username,email,password){
    setUsername.call(this, username)

    this.email = email;
    this.password = password;
    return this
}

const newUser = new CreateUser("Harshad","hbhoir002@gmail.com",123);

console.log(newUser);

/* 

Why Use call() in Your Example?
In your example, setUsername is defined as a standalone function outside of any object or class. Without using call(), if you simply called setUsername(username) inside the CreateUser constructor, this inside setUsername would not refer to the instance of CreateUser being created but rather to the global object (or undefined in strict mode), depending on where and how the script is running. This would lead to unintended behavior or errors.

By using setUsername.call(this, username), you explicitly tell JavaScript to execute setUsername with this set to the current this of CreateUser — i.e., the new object being constructed. This ensures that this.username inside setUsername correctly refers to the username property of the new user object. */ 

/* 

What Happens If We Don't Use call()?
If you don't use call() and simply call setUsername(username) within CreateUser:

this.username in setUsername would set username on the global object in non-strict mode, or it would result in a TypeError in strict mode because this would be undefined.
The newUser object would not have a username property set as intended.

*/ 