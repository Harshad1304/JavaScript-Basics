const requestURL = "https://api.github.com/users/Harshad1304"
const xhr = new XMLHttpRequest();


xhr.open('GET',requestURL);

xhr.onreadystatechange = function (){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        // const data = this.responseText;
        const data = JSON.parse(this.responseText);
        console.log(typeof data )
        console.log(data.followers)
        console.log(data.login)
        
    }
}

xhr.send()

