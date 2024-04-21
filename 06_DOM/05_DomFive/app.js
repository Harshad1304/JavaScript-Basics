function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLanguage('CPP');
addLanguage('Core Java');
addLanguage('Python');

//Above method was not that optimized here is the optimized method

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
//2nd approch is bit optimized when you use innerHtml whole tree treveers 

addOptiLanguage("goLang"); 

//Edit 

const secondLang = document.querySelector('li:nth-child(2)');

// secondLang.innerHTML = "mojo" ; //Not so optimized approch

const newLi = document.createElement('li');

newLi.textContent = "MOJO";

secondLang.replaceWith(newLi);

//Edit
 
const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = `<li>TypeScript</li>`

//Remove

const lastLang = document.querySelector('li:last-child');

lastLang.remove(); // Golang has been removed; 