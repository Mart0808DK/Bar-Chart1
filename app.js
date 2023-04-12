"use strict";

window.addEventListener("load", start) 

const numbers = [12, 5, 9, 33, 16, 4, 21, 26, 17, 24, 0, 11, 31, 22, 7, 6, 29, 3, 8, 13, 20, 28, 18, 10, 23, 14, 15, 27, 1, 19, 32, 2, 25, 30];

function start() {
    console.log("Javascript Kører");

    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    const h = numbers[0] / 32 *100


    firstBar.style.height = `${h}px`;


}

