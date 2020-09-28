let characters = [];
const spinner = document.querySelector('.spinner');
const charactersSelected1Div = document.querySelector('.charactersSelected1');
const charactersSelected2Div = document.querySelector('.charactersSelected2');
const charactersDiv = document.querySelector('.characters')
const selectCharacter = (characterId) => {
    const characterSelected = document.getElementById(characterId);
    if (charactersSelected1Div.childElementCount < 3) {
        characterSelected.style.width = '7em';
        charactersSelected1Div.append(characterSelected)
    } else if (charactersSelected2Div.childElementCount < 3) {
        characterSelected.style.width = '7em';
        charactersSelected2Div.append(characterSelected)
    }
    if (charactersSelected2Div.childElementCount === 3) {
        charactersDiv.remove();
    }
}

const renderCharacters = (characters = []) => {
    charactersDiv.innerHTML = '';
    characters.forEach(character => {
        charactersDiv.innerHTML += `
    <div class="character" 
    onclick="selectCharacter(${character.id})"
     id="${character.id}"
     >
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="${character.name}"/>
    </div>
    `
    })
}

const getCharacters = async() => {
    spinner.style.display = 'block';
    try {
        let res = await fetch('https://rickandmortyapi.com/api/character');
        // let res = await fetch('characters.json');
        res = await res.json();
        // const characters = res.results;
        characters = res.results;
        renderCharacters(characters);
    } catch (error) {
        console.error(error)
    } finally {
        spinner.style.display = 'none'
    }
}
const searchCharacter = event => {
    const search = event.target.value.toLowerCase()
    console.log(event.target, search);
    const charactersFiltered = characters.filter(character => character.name.toLowerCase().includes(search))
    renderCharacters(charactersFiltered)
}