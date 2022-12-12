const url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const form: HTMLFormElement = document.querySelector('#defineform');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const text = formData.get('defineword') as string;
    
    try {
      const response = await fetch(`${url}${text}`);
      const definition = await response.json();
      console.log(definition);
      document.getElementById('word').innerHTML = definition[0].word;
      document.getElementById('phonetic').innerHTML = definition[0].phonetics[0].text;
      document.getElementById('definitions')
      document.getElementById('definition1')
        .innerHTML = `${definition[0].meanings[0].partOfSpeech}: ${definition[0].meanings[0].definitions[0].definition}`;
      document.getElementById('definition2')
        .innerHTML = `${definition[0].meanings[1].partOfSpeech}: ${definition[0].meanings[1].definitions[0].definition}`;
      document.getElementById('definition 3').innerHTML = `${definition[0].meanings[2].partOfSpeech}: ${definition[0].meanings[2].definitions[0].definition}`;
      document.getElementById('definition 4').innerHTML = `${definition[0].meanings[0].partOfSpeech[1]}: ${definition[0].meanings[0].definitions[0].definition}`;
      document.getElementById('audio').src = definition[0].phonetics[0].audio;
    } catch (error) {
      console.error(error);
    }
  });