//SELECIONO UM ELEMENTO DO MEU HTML, A LISTA DE DESTAQUES
let listaDestaque  = document.querySelector(".secaoVideosDestaques_lista")
let secaoTodosVideos  = document.querySelector(".secaoTodosVideos ul")


//ARRAY DE VÍDEOS
const listaVideos = [
    {
        id: 0,
        titulo: "Halo Infinite - Gameplay do multiplayer",
        visualizacoes: "2,7 mil visualizações",
        descricao: "Vídeo gameplay do jogo Halo Infinite no modo multiplayer, via acesso antecipado para testes fornecido via Xbox.<br>Plataformas: Xbox One, Xbox Series, PC.",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "The Witcher 3 - O Início de Gameplay",
        visualizacoes: "3,1 mil visualizações",
        descricao: "Vídeo gameplay do jogo The Witcher 3 Wild Hunt em 1080p 60fps. Game rodando no PC, dublado e legendado em Português PT-BR.<br>Plataformas: Xbox One, PS5, PC.",
        thumbnail: "./img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Forza Horizon 5 - Trailer Oficial",
        visualizacoes: "1,9 mil visualizações",
        descricao: "Vídeo conferindo o início de gameplay do jogo Forza Horizon 5 no Xbox Series. É o novo game da franquia Forza Horizon, uma série de jogos de corrida.<br>Plataformas: Xbox One, Xbox Series, PC, PS4, PS5.",
        thumbnail: "./img/thumb3.webp"
    },
    {
        id: 3,
        titulo: "Rage 2 - Análise",
        visualizacoes: "5,5 mil visualizações",
        descricao: "Rage 2 é uma continuação surpreendente e une dois estúdios que dominam seus estilos: a iD Software com FPS's e a Avalanche com mundos abertos.<br>Plataformas: Xbox One, Xbox Series, PC.",
        thumbnail: "./img/thumb4.webp"
    }
];


function listarVideos(listaDestaque){
    for(let i = 0; i < listaVideos.length; i = i +1){

        let titulo        = listaVideos[i].titulo
        let visualizacoes = listaVideos[i].visualizacoes
        let descricao     = listaVideos[i].descricao
        let thumbnail     = listaVideos[i].thumbnail

        criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
    }
}
listarVideos(listaDestaque)
listarVideos(secaoTodosVideos)

//FUNÇÃO QUE CRIA O TEMPLATE
function criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail){

    

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
