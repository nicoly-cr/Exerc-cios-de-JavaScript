// 1
const usuario = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

const { nome, idade } = usuario;
console.log("Nome: " + nome + " | Idade: " + idade + " anos.");

// 2
function mostrarProduto({ nome: nomeProd, preco }) { // usei nomeProd para não conflitar com a 'nome' acima
    console.log("Produto: ", nomeProd);
    console.log("Preço: ", preco);
}

mostrarProduto({
    nome: "Notebook",
    preco: 3500
});

// 3
const numeros = [10, 20, 30, 40];
const [primeiro, segundo] = numeros;
console.log("Primeiro: ", primeiro);
console.log("Segundo: ", segundo);

// 4
const alunos = [
    { nome: "Carlos", idade: 22 },
    { nome: "Maria", idade: 24 },
    { nome: "João", idade: 21 }
];
for (const { nome: nomeAluno, idade: idadeAluno } of alunos) {
    console.log(`${nomeAluno} tem ${idadeAluno} anos.`);
}


// ex - 1 
const alunoNovo = {
    nomee: "Lucas ",
    idadee: 20,
    curso: " ADS "
};

const { nomee, idadee, curso } = alunoNovo;
console.log(nomee, idadee, curso);

// ex - 2 
function mostrarFilme({ titulo, ano, diretor }) {
    console.log(`Filme: ${titulo} | Lançamento: ${ano} | Diretor: ${diretor}`);
}
mostrarFilme({
    titulo: "Matrix",
    ano: 1999,
    diretor: "Wachowski"
});

// ex - 3
const numeros2 = [10, 20, 30, 40];
const [primeiro2, , , ultimo2] = numeros2;

console.log("Primeiro da lista 2: ", primeiro2);
console.log("Último da lista 2: ", ultimo2);