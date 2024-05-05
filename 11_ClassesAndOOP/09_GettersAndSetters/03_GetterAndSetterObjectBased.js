
const user = {
    _email: "hbhoir00000@gmail.com",
    _password: "Harshad",

    get email(){
        return this._email.toLocaleUpperCase();
    },
    
    set(value){
        this._email = value
    }
}; 

console.log(user.email)