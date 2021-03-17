let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/audi.jpg') {
        myImage.setAttribute('src', 'images/nissan.jpg');
    } else {
        myImage.setAttribute('src', 'images/audi.jpg');
    }
}

let myButton = document.querySelector('button[name=username]');
let textColorButton = document.querySelector('button[name=text_color]');
let myHeading = document.querySelector('h1');
let myTexts = document.querySelectorAll('p');
let myLists = document.querySelectorAll('li')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello, ' + myName;
    }
}

function changeTextColor() {
    myTexts.forEach(function(text) {
        if(text.style.color != 'blue') {
            text.style.color = "blue";
        } else {
            text.style.color = '#F6F740'
        }
    });
    myLists.forEach(function(list) {
        if(list.style.color != 'blue') {
            list.style.color = "blue";
        } else {
            list.style.color = '#F6F740'
        }
    });
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

textColorButton.onclick = function() {
    changeTextColor();
}