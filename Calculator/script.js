'use strict' 

// ======================Element Selection  =======================
const btnOff = document.querySelector('.off');
const btnClear = document.querySelector('.clear');
const screenDisplay = document.querySelector('.screen');
const btnNumber = document.querySelector('.num');
// const button = document.querySelector('button');

let display = document.getElementById('display');

if(screenDisplay.textContent !== 0 || screenDisplay.textContent === '') {
    btnClear.addEventListener('click', function(){
        screenDisplay.textContent === 0;
    })
}
// ==================== Clear Screen =======================
btnClear.addEventListener('click', function() {
    screenDisplay.textContent = '0';
})
// ==================== Switch the screen off =====================

if(screenDisplay.textContent !== '') {
    btnOff.addEventListener('click',function() {
        screenDisplay.textContent = ' ';
    })
};

// ======================= Operational Function ==================
 function toDisplay(value) {
    if (screenDisplay.textContent === '0' && value !== '.') {
        screenDisplay.textContent = value;
    } else {
     screenDisplay.textContent += value
    }
 }

// ============= Calculations and evaluation Function ==============
 function calculate () {
    try {
        screenDisplay.textContent = eval(screenDisplay.textContent);
    } catch {
        screenDisplay.textContent = 'Error';
    }
 }