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
    characters.forEach(character => {
        document.querySelector('.characters').innerHTML += `
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
        let res = await fetch('characters.json');
        res = await res.json();
        // const characters = res.results;
        const { results: characters } = res;
        renderCharacters(characters);
    } catch (error) {
        console.error(error)
    } finally {
        spinner.style.display = 'none'
    }
}