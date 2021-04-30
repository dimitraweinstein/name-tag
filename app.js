const userInput = document.getElementById('user-input');
const myButton = document.getElementById('button');
const wordBox = document.getElementById('word-box');

myButton.addEventListener('click', () => {
    const name = userInput.value;
    wordBox.textContent = name;
})

const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounWordBox = document.getElementById('pronoun-word-box');

pronounButton.addEventListener('click', () => {
    const stuff = pronounInput.value;
    pronounWordBox.textContent = stuff;
})

const colorButton1 = document.getElementById('main-color');
const colorButton2 = document.getElementById('main-color');
const colorButton3 = document.getElementById('main-color');

const mainColor = document.getElementById('main-color');

colorButton1.addEventListener('click', () => {
    const newColor1 = rgb('27, 23, 37')
    backgroundColor.style.background = newColor1;    
})
