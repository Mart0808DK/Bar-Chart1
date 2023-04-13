"use strict";

window.addEventListener("load", start) 

const numbers = [12, 5, 9, 33, 16, 4, 21, 26, 17, 24, 0, 11, 31, 22, 7, 6, 29, 3, 8, 13, 20, 28, 18, 10, 23, 14, 15, 27, 1, 19, 32, 2, 25, 30,36,21,20,2,16];

function start() {
    console.log("Javascript Kører");
    setInterval(setBarChart, 1000);
    setBarChart();
    


}

function displayData() {
    const bars = document.querySelectorAll(".bar");

    
    for (let i = 0; i < 40; i++) {
        const wholeBar = bars[i];
    
        const h = (numbers[i] / 32) * 100;
    
        wholeBar.style.height = `${h}px`;
        
    }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateQueueArray() {
  numbers.unshift(randomInt(0, 32));
  numbers.pop();
}


function setBarChart() {
    displayData();
    updateQueueArray();
}