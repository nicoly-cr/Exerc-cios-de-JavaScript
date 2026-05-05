const nome = "Melhor Terceirão do SESI";
document.getElementById("app").innerHTML = `<h1>Olá ${nome}</h1>`;


//---------------------------------------------------------------------------------------


//Produto
const produto = {
    nome: "Notebook",
    preco: 8000
};

function renderProduto(){
    document.getElementById("produto").innerHTML = 
    `<h2>${produto.nome}</h2>
    <p>Preço: R$ ${produto.preco}</p>`
}

renderProduto()


//---------------------------------------------------------------------------------------


//Dinâmica - Contador
//Estado muda -> render() -> UI atualizada 
let numero = 0;

function render(){
    document.getElementById("contador").innerHTML = `<h1>${numero}</h1>`
}

function incrementar(){
    numero++;
    render();
}

function decrementar(){
    numero--;
    render();
}

render();


//---------------------------------------------------------------------------------------


//Condicional
const logado = true;

function renderStatus () {
    
    if(logado) {
        document.getElementById("status").innerHTML =
        "<p>Usuário logado</p>";
    } else {
        document.getElementById("status").innerHTML =
        "<p>Faça Login</p>";
    }
}

renderStatus();


//---------------------------------------------------------------------------------------


//Lista de itens
const tarefas = [
    "Estudar JS",
    "Treinar React",
    "Fazer exercícios",
    "Fortalecer a base"
];

function renderLista(){
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach(tarefa => {
        lista.innerHTML += `<li>${tarefa}</li>`;
    });
}

renderLista();


//---------------------------------------------------------------------------------------


//Exemplo com Map
function renderListaMap(){
    const lista = document.getElementById("renderListaMap");
    lista.innerHTML = "";

    const itens = tarefas.map(tarefa => `<li>${tarefa}</li>`);
    lista.innerHTML = itens.join("");
}

renderListaMap();


//---------------------------------------------------------------------------------------


//Mini aplicação (lista de produtos)
const produtos = [
    {nome:"Mouse", preco:50},
    {nome:"Teclado", preco:120},
    {nome:"Monitor", preco:900},
];

function renderProdutos() {

    const container = document.getElementById("produtos");

    container.innerHTML = "";

    produtos.forEach(p => {
        container.innerHTML += `
        <div>
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
        </div>
        `;
    });
}

renderProdutos();


//---------------------------------------------------------------------------------------


//Renderização conndicional

// 1- Exibir o painel de adminstrador se a senha e usuário forem corretos
const usuarioDB = "Nicoly";
const senhaDB = "Ayumi123";

function verificarLogin(usuario, senha) {
    const container = document.getElementById("status?adm");
    
    if (usuario === usuarioDB && senha === senhaDB) {
        container.innerHTML = `
            <h2>Painel Administrativo</h2>
            <p>Status: Logado como ${usuario}</p>`;
    } else {
        container.innerHTML = "<p>Acesso Negado</p>";
    }
}

// Execução de teste
verificarLogin("Nicoly", "Ayumi123");


//---------------------------------------------------------------------------------------


//Renderizar lista 
// 2- Crie uma lista do seu gostos ao menos 10 itens e 3 atributo por item e exiba
const meusGostos = [
    { nome: "Academia", categoria: "Esporte", nota: 10 },
    { nome: "Muay Thai", categoria: "Esporte", nota: 10 },
    { nome: "Corrida", categoria: "Esporte", nota: 8 },
    { nome: "Beach Tenis", categoria: "Esporte", nota: 5 },
    { nome: "Redação", categoria: "Estudo", nota: 10 },
    { nome: "Matemática", categoria: "Estudo", nota: 9 },
    { nome: "Biologia", categoria: "Estudo", nota: 9 },
    { nome: "Colágeno", categoria: "Suplemento", nota: 9 },
    { nome: "Whey protein", categoria: "Suplemento", nota: 9 },
    { nome: "Creatina", categoria: "Suplemento", nota: 10 }
];

function renderGostos() {
    const lista = document.getElementById("renderListaMap2");
    
    lista.innerHTML = meusGostos.map(item => `<li>Nome: ${item.nome} | Tipo: ${item.categoria} | Avaliação: ${item.nota}</li>`).join("");
}

renderGostos();


//---------------------------------------------------------------------------------------


//Sistema de tarefas 
// 3- Um array que eu possa ir adicionando tarefas toda vez, incie o array vazio
const tarefasDiarias = [];

function adicionarTarefa(novaTarefa) {
    if (novaTarefa !== "") {
        tarefasDiarias.push(novaTarefa);
        renderListaDiaria();
    }
}

function renderListaDiaria() {
    const listaUI = document.getElementById("lista2");
    listaUI.innerHTML = ""; // Limpa antes de renderizar

    tarefasDiarias.forEach(item => {
        listaUI.innerHTML += `<li>${item}</li>`;
    });
}

// Exemplos de uso:
adicionarTarefa("Estudar Biologia");
adicionarTarefa("Ir ao treino");