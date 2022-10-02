

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
//≥ı ºªØ
myHeading.textContent = 'HELLO BABE!';

let myImage = document.querySelector('img');

function changeImg(myName) {
    let mySrc = myImage.getAttribute('src');
    let thisUser = 'images/' + myName+'.jpg';
    myImage.setAttribute('src', thisUser);
}



function setUserName() {
    let myName = prompt('please enter your name');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'WELCOME!  ' + myName + '!';
        changeImg(myName);
    }
}


myButton.onclick = function () {
    setUserName();
}

