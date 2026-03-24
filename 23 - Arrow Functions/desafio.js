let produtos = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 120}
];

//Desafio 1
const nomesProdutos = produtos.map(item => item.nome);
console.log(nomesProdutos);

//Desafio 2
const precosComDesconto = produtos.map(item => item.preco * 0.9);
console.log(precosComDesconto);

//Desafio 3
let total = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(total);