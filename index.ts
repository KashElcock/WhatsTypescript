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
        .setAttribute('class', 'bg-secondary rounded text-bg-secondary p-3');
      document.getElementById('definition1')
        .innerHTML = `${definition[0].meanings[0].partOfSpeech}: ${definition[0].meanings[0].definitions[0].definition}`;
      document.getElementById('definition2')
        .innerHTML = `${definition[0].meanings[1].partOfSpeech}: ${definition[0].meanings[1].definitions[0].definition}`;
    } catch (error) {
      console.error(error);
    }
  });