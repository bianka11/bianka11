let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Aatrox2.png') {
        myImage.setAttribute('src' , 'images/Aatrox2.png');
     } else {
         myImage.setAttribute('src' , 'images/Aatrox2.png');
           }
    }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name' , myName);
        myHeading.textContent = 'Aatrox is cool, ${myName}';

    }
}
if(!localStorage.getItem('name')) {
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Aatrox is cool,' + storedName;
}
myButton.onclick = function() {
    setUserName();
}