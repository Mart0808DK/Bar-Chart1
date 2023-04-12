"use strict";

window.addEventListener("load", start) 

function start() {
    console.log("Javascript Kører");

    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    firstBar.style.height = "100px";


}