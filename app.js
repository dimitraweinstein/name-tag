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

colorButton3.changeBackgroundColor('click', () => {
    const tagColor = rgb (34, 108, 224)
    top.changeBackgroundColor = tagColor;
    //I'm not sure what to change the above command to//
})

