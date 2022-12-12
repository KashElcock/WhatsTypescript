"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';
const form = document.querySelector('#defineform');
form.onsubmit = (event) => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get('defineword');
    console.log(text);
    fetch(url + text) // fetch returns a promise
        .then(response => response.json()) // convert to json
        .then(data => {
        console.log(data);
        const definition = data[0].meanings[0].definitions[0].definition;
        const partOfSpeech = data[0].meanings[0].partOfSpeech;
        const word = data[0].word;
        const output = document.querySelector('#output');
        output.innerHTML = `<h2>${word} (${partOfSpeech})</h2><p>${definition}</p>`;
    })
        .catch(error => console.error(error));
    event.preventDefault(); // prevent default form submission
    return false; // prevent reload
};
