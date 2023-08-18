const characters = document.querySelectorAll('.personagem');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removeCharacterSelection();

        character.classList.add('selecionado');

        changeSelectedCharacterImage(character);

        changeSelectedCharacterName(character);

        changeCharacterDescription(character);
    });
});

function changeCharacterDescription(character) {
    const characterDescription = document.getElementById('descricao-personagem');
    characterDescription.innerText = character.getAttribute('data-description');
}

function changeSelectedCharacterName(character) {
    const selectedCharacterName = document.getElementById('nome-personagem');
    selectedCharacterName.innerText = character.getAttribute('data-name');
}

function changeSelectedCharacterImage(character) {
    const largeCharacterImage = document.querySelector('.personagem-grande');

    const characterId = character.attributes.id.value;
    largeCharacterImage.src = `./src/imagens/card-${characterId}.png`;
}

function removeCharacterSelection() {
    const selectedCharacter = document.querySelector('.selecionado');
    if (selectedCharacter) {
        selectedCharacter.classList.remove('selecionado');
    }
}
