const spinner = document.querySelector('.spinner');

const renderCharacters = (characters = []) => {
    characters.forEach(character => {
        document.querySelector('.characters').innerHTML += `
    <div class="character">
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="${character.name}"/>
    </div>
    `
    })
}

const getCharacters = () => {
    spinner.style.display = 'block';
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(res => {
            // const characters = res.results;
            const { results: characters } = res;
            renderCharacters(characters);
        })
        .catch(error => console.error(error))
        .finally(() => spinner.style.display = 'none');
}