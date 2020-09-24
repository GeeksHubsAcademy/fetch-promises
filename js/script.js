fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => {
        console.log(res, typeof res)
            // const characters = res.results;
        const {
            results: characters
        } = res;
        characters.forEach(character => {
                document.querySelector('.results').innerHTML += `
            <div class="character">
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="${character.name}"/>
            </div>
            `
            })
            // for (const character of characters) {
            //     document.querySelector('.results').innerHTML += `
            //     <div class="character">
            //     <h3>${character.name}</h3>
            //     </div>
            //     `
            // }
            // for (let i = 0; i < characters.length; i++) {
            //     const character = characters[i];
            //     document.querySelector('.results').innerHTML += `
            //     <div class="character">
            //     <h3>${character.name}</h3>
            //     </div>
            //     `
            // }
    })
    .catch(error => console.error(error));
console.log('fetching data')