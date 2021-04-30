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

const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounWordBox = document.getElementById('pronoun-word-box');

pronounButton.addEventListener('click', () => {
    const backgroundColor = '#1B1725';
    
})