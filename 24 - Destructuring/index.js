//1
const usuario = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

const {nome, idade} = usuario;

console.log("Nome: " + nome + " Idade: " + idade + " anos.");


//2
function mostrarProduto({nome, preco}){
    console.log("Produto: ", nome);
    console.log("Preço: ", preco);
}

mostrarProduto({
    nome: "Notebook",
    preco: 3500
});


//3
const numeros = [10, 20, 30, 40];
const [primeiro, segundo] = numeros;
console.log("Primeiro: ", primeiro);
console.log("Segundo: ", segundo);


//4
const alunos = [
    {nome: "Carlos", idade: 22},
    {nome: "Maria", idade: 24},
    {nome: "João", idade: 21}
];
for(const {nome, idade} of alunos){
    console.log(`${nome} tem ${idade} anos.`);
}