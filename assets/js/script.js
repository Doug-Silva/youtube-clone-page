//SELECIONO UM ELEMENTO DO MEU HTML, A LISTA DE DESTAQUES
let listaDestaque = document.querySelector(".secaoVideosDestaques_lista")
let secaoTodosVideos = document.querySelector(".secaoTodosVideos ul")
let listaReproducao = document.querySelector(".secaoAdicionarAFila_lista")

//ARRAY DE VÍDEOS
const listaVideos = [
    {
        id: 0,
        titulo: "Halo Infinite - Gameplay do multiplayer",
        visualizacoes: "2,7 mil visualizações",
        descricao: "Vídeo gameplay do jogo Halo Infinite no modo multiplayer, via acesso antecipado para testes fornecido via Xbox.<br>Plataformas: Xbox One, Xbox Series, PC.",
        thumbnail: "./assets/img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "The Witcher 3 - O Início de Gameplay",
        visualizacoes: "3,1 mil visualizações",
        descricao: "Vídeo gameplay do jogo The Witcher 3 Wild Hunt em 1080p 60fps. Game rodando no PC, dublado e legendado em Português PT-BR.<br>Plataformas: Xbox One, PS5, PC.",
        thumbnail: "./assets/img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Forza Horizon 5 - Trailer Oficial",
        visualizacoes: "1,9 mil visualizações",
        descricao: "Vídeo conferindo o início de gameplay do jogo Forza Horizon 5 no Xbox Series. É o novo game da franquia Forza Horizon, uma série de jogos de corrida.<br>Plataformas: Xbox One, Xbox Series, PC, PS4, PS5.",
        thumbnail: "./assets/img/thumb3.webp"
    },
    {
        id: 3,
        titulo: "Rage 2 - Xbox Series X Gameplay HDR        ",
        visualizacoes: "5,5 mil visualizações",
        descricao: "Rage 2 é uma continuação surpreendente e une dois estúdios que dominam seus estilos: a iD Software com FPS's e a Avalanche com mundos abertos.<br>Plataformas: Xbox One, Xbox Series, PC.",
        thumbnail: "./assets/img/thumb4.webp"
    }
];

//FUNÇÃO QUE VAI LISTAR OS VÍDEOS, UTILIZANDO UM LOOP FOR
function listarVideos(listaDestaque) {
    for (let i = 0; i < listaVideos.length; i++) {

        //ACESSANDO VALORES DO VÍDEO
        let titulo = listaVideos[i].titulo
        let visualizacoes = listaVideos[i].visualizacoes
        let descricao = listaVideos[i].descricao
        let thumbnail = listaVideos[i].thumbnail

        //PASSANDO PARA FUNÇÃO CRIAR O TEMPLATE
        criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
    }
}

//LISTANDO VÍDEOS
listarVideos(listaDestaque)
listarVideos(secaoTodosVideos)

//FUNÇÃO QUE CRIA O TEMPLATE
function criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail) {

    //CRIANDO UM ELEMENTO DO TIPO HTML => LI
    let li = document.createElement("li")

    //ESTOU ADICIONANDO TAGS E O CONTEÚDO PARA DENTRO DESSE LI
    li.innerHTML = `
        <figure>
            <img src="${thumbnail}" alt="${titulo}">
        </figure>

        <div>
            <h3>${titulo}</h3>
            <span>${visualizacoes}</span>
            <p>${descricao}</p>
            <button class="buttonAdicionarAFila">Adicionar a fila</button>
        </div>
    `

    //ESTOU ADICIONANDO O LI, PREENCHIDO DENTRO DA MINHA LISTA LÁ NO HTML
    listaDestaque.appendChild(li)
}

//FUNÇÕES DE CLIQUE ADICIONAR
listaDestaque.addEventListener("click", adicionarAFila)
secaoTodosVideos.addEventListener("click", adicionarAFila)

//FUNÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function adicionarAFila(event) {

    //PEGA O ELEMENTO CLICADO
    const button = event.target

    //PEGA O NOME DO ELEMENTO
    const buttonName = event.target.tagName

    //VERIFICAÇÃO SE É UM BOTÃO
    if (buttonName == "BUTTON") {

        //PEGA O PAI DO BOTÃO
        const li = button.closest("li")

        //FAZ UMA CÓPIA DESSE ELEMENTO
        const liCopy = li.cloneNode(true)

        //ADICIONA NA LISTA DE REPRODUÇÃO
        listaReproducao.appendChild(liCopy)
    }
}

//FUNÇÃO DE CLIQUE REMOVER
listaReproducao.addEventListener("click", removerDaFila)

//FUNÇÃO QUE REMOVE DA LISTA DE REPRODUÇÃO
function removerDaFila(event) {

    //PEGA O ELEMENTO CLICADO
    const elemento = event.target

    //PEGA O NOME DO ELEMENTO
    const elementoName = event.target.tagName

    //VERIFICA SE É UM BOTÃO
    if (elementoName !== "LI") {

        elemento.closest("li").remove()

    } else {
        elemento.remove()
    }
}