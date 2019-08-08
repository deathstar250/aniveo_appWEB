'use strict'

//uso del dom
function getBUM() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

//et box = document.getElementsByClassName('box');
var box = document.querySelector('mycaja');

function changecolor(color) {
    box.style.background = color;
}