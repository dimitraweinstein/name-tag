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

const colorButton1 = document.getElementById('color-button1');
const colorButton2 = document.getElementById('color-button2');
const colorButton3 = document.getElementById('color-button3');
const backgroundColor = document.getElementById('main-color');
const bottomColor = document.getElementById('main-color2');

colorButton1.addEventListener('click', () => {
    const newColor1 = 'rgb(27, 23, 37)';
    backgroundColor.style.background = newColor1;
    bottomColor.style.background = newColor1;    
})

colorButton2.addEventListener('click', () => {
    const newColor2 = 'rgb(164, 153, 179)';
    backgroundColor.style.background = newColor2;
    bottomColor.style.background = newColor2;
})

colorButton3.addEventListener('click', () => {
    const newColor3 = 'rgb(34, 108, 224)';
    backgroundColor.style.background = newColor3;
    bottomColor.style.background = newColor3;    
    
})
