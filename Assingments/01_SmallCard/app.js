





function fetchProfileUrl(profileURL){  //writing a function to Get Data from URL
    
const xhr = new XMLHttpRequest();  // Creating a new XMLHttpRequest Object 



xhr.onreadystatechange = function(){                  // Define a callback function to handle response 
        if(xhr.readyState === XMLHttpRequest.DONE){     // checking if the request is completed or not 
            if(xhr.status === 200){                     // checking if the reponse if successful (status code 200);
               const profile = JSON.parse(this.responseText);   // parse the JSON response
                createProfile(profile)              // Calling the create profile function with the recived profile data which we parsed in JSON OBJECT 
            } else {
                console.log("Server request Failed:", xhr.status, xhr.statusText)       // Error message if the server doesnt responed.
            }

        }}
        xhr.open('GET', profileURL); // Open a GET request to the specifed URL

        xhr.send();     // Seding the request
}






    function createProfile(gitProfile){     //Function to create profile elements and update HTML 

        document.getElementById('profileImg').src = gitProfile.avatar_url               //Selecting the img tag and chaning the attribute value of img tag src 
        document.querySelector('#card-title').innerHTML = gitProfile.name               //Selecting the title tag h5 and chaning its innerHTML to profile name 
              
        document.querySelector('#follower-btn').addEventListener('click',(e)=>{     //adding an event listener to the button to show us followers
            const followersCount = document.getElementById('followersCount');       // selecting the element to check and if the check returns true we  modify the text 
            if(!followersCount.textContent.trim()){                         // adding an conditional IF statement to check that the element has no text inside 
                 followersCount.textContent = gitProfile.followers;         // changing the text 
                
            }
            
            
        })
    }

    const URL = "https://api.github.com/users/hiteshChoudhary"; // URL of the gitProfile we want to add to the card
    const URL1 = "https://api.github.com/users/Harshad1304" // 
 fetchProfileUrl(URL);      // calling the function with the profile url 
//  fetchProfileUrl(URL1); // If we run this the reposone will change to this URL profile but this profile has 0 followers but its still giving us previous profile followers uncomment to see 