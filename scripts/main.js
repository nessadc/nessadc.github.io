let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/audi.jpg') {
        myImage.setAttribute('src', 'images/nissan.jpg');
    } else {
        myImage.setAttribute('src', 'images/audi.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}