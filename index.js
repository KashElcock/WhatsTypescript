var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const form = document.querySelector('#defineform');
form.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    const formData = new FormData(form);
    const text = formData.get('defineword');
    try {
        const response = yield fetch(`${url}${text}`);
        const definition = yield response.json();
        console.log(definition);
        document.getElementById('word').innerHTML = definition[0].word;
        document.getElementById('phonetic').innerHTML = definition[0].phonetics[0].text;
        document.getElementById('definitions');
        document.getElementById('definition1')
            .innerHTML = `${definition[0].meanings[0].partOfSpeech}: ${definition[0].meanings[0].definitions[0].definition}`;
        document.getElementById('definition2')
            .innerHTML = `${definition[0].meanings[1].partOfSpeech}: ${definition[0].meanings[1].definitions[0].definition}`;
        document.getElementById('definition 3').innerHTML = `${definition[0].meanings[2].partOfSpeech}: ${definition[0].meanings[2].definitions[0].definition}`;
        document.getElementById('definition 4').innerHTML = `${definition[0].meanings[0].partOfSpeech[1]}: ${definition[0].meanings[0].definitions[0].definition}`;
        document.getElementById('audio').src = definition[0].phonetics[0].audio;
    }
    catch (error) {
        console.error(error);
    }
}));
//# sourceMappingURL=index.js.map