// 1st example 
// inside hmtl you can simply add this attribute onclick = "alert("owl")" but this is not a good practice not a good approh (avoid this); 
// 2nd example 
// document.getElementById('owl').onclick = ()=>{
//     alert("Owl clicked")
// }; // This approch is also correct but this one is also not that good to use we dont get much event handling from this approch 

// 3rd example 

// document.getElementById('owl').addEventListener( 'click' , function(e){ 
//     alert("owl Clicked again")
//     } ,  false  // "false" This method also accepts 3rd parameter "false"  if you dont add this value still it          will be there as default    
    // ) ;         // This approch is best one you should always use this type of approch where you can get a argument inside event function (e) its called "event object" which gives us different properties like e.target , e.value  browser events and also enviroment events like where did mouse exactly clicked the x and y axis etc ..etc...

    // *** Read This online ***
    // type, timestamp , defaultPrevented 
    // target , toElement , srcElement , currentTarget
    // clientX, clientY , screenX , ScreenY
    // altKey, ctrlKey , shiftKey, keyCode 

    //attachEvent() this is also a event listner for internet Exploler
    // jQuery - on  

    // What is event propagation ?

    // Event Bubbling example. 
    // If the 3rd argument is false "which false by default if you dont give " it will click the owl first then it will click the ul like "BOTTOM TO TOP". but when you set that value to true (event capturing) it will click the ul first then it will click the owl . like "TOP TO BOTTOM". 

    // when you doesnt want any bubbling to happen or capturing you can use the event object to stop it using 
    // e.stopPropagation(); method 
    
    // document.getElementById("images").addEventListener('click', function(e){
    //     console.log("clicked inside the ul ");
    // },false)
    
    // document.getElementById("owl").addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation(); 
    // },false)  // uncomment both to run and check 

    // document.getElementById('google').addEventListener('click', function(e){
    //     console.log('google clicked');
    //     e.stopPropagation();
    //     e.preventDefault();
    // }, false)
    
    // document.querySelector('#images').addEventListener('click',function(e){
    //     console.log(e);
    //      console.log(e.target);// This will give us the html tag where we are clicking if you click on image it will give u only image tagss
    //     // console.log(this);
    //     console.log(e.target.parentNode); // This will give us the target elements parentNode 
    // },false)
 // javaScript events always runs sequance wise but there are execptions Async javaScript 
 // Event Listeners gives you power to handle propagation values in onclick event you dont get these

 // How to remove ?

//  document.querySelector("#images").addEventListener('click',function(e){
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode; 
//     removeIt.remove(); // this is the simple one below is bit complicated but if you click on li or just side on the image it will delete entire ul tag to prevent this we can add checks in between follow the next example for that .
//     // removeIt.parentNode.removeChild(removeIt);
//  },false)

document.querySelector("#images").addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode ; 
        removeIt.remove();
        console.log(e.target.tagName)
    }else{
        console.log(e.target.tagName)
    }
})