class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    } 

    get email(){
        return `${this._email} GetterValue(Public)`; 
    }

    set email(value){
        this._email = value; 
    }
    get password(){
        // return this._password.toUpperCase();
        return `${this._password} GetterValue(Public) `
    }

    set password(value){
        this._password = value;
    }
}


const harshad = new User("harshad@13.Ai", "123abhcd");

console.log(harshad.email);
console.log(harshad.password);
 



class UserOne {
    constructor(email,passowrd){
        this.email = email;
        this.passowrd = passowrd;
    }


    get passowrd(){
        return `${this._passowrd}chalbhaiaagebad`
    }

    set passowrd(value){
         this._passowrd = value;
    }

}

const newUser = new UserOne("pratikshinde", "123");

