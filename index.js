const containerPersonagem = document.getElementsByClassName('personagem')

async function requisicaoPersonagens() {
    for(let i = 0; i <= 2; i++){
        const idPersonagem = Math.floor(Math.random() * 826 - 1)

        const url = `https://rickandmortyapi.com/api/character/${idPersonagem}`
        const pegarPersonagemAleatorio = await fetch(url)
        const personagem = await pegarPersonagemAleatorio.json()

        containerPersonagem[i].children[0].src = personagem.image
        containerPersonagem[i].children[1].innerHTML = `Nome: ${personagem.name}`
        containerPersonagem[i].children[2].innerHTML = `Espécie: ${personagem.species}`
        containerPersonagem[i].children[3].innerHTML = `Status: ${personagem.status}`
    }
}

requisicaoPersonagens()
