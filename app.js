const userInput = document.getElementById('user-input');
const myButton = document.getElementById('button');
const wordBox = document.getElementById('word-box');

myButton.addEventListener('click', () => {
    const name = userInput.value;
    wordBox.textContent = name;
})