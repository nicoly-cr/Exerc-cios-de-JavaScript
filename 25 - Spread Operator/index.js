//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);


//2
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);


//3
const string = "Hello";
const chars = [...string];
console.log(chars);


//4
function saudacao(nome){
    return `Olá, ${nome}`;
}
const nome = ["Alice", "Bob", "Charlie"];
const greetings = nome.map(nome => saudacao(nome));
console.log(greetings);


//5
const ninhoArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = ninhoArr.flat();
console.log(flatArr);


//6
const ninhoObj = {a: 1, b: {c: 2, d: 3}};
const flatObj = {...ninhoObj, ...ninhoObj.b};
delete flatObj.b;
console.log(flatObj);


//7
function multiplicar(...numeros){
    return numeros.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiplicar(2, 3, 4));


//8
const arr3 = [7, 8, 9];
const obj3 =  {e: 5, f: 6};
const combinedMixed = [...arr3, ...Object.values(obj3)];
console.log(combinedMixed);


//9
const string2 = "World";
chars2 = [...string2];
console.log(chars2);


//10
const obj4 = {g: 7, h: 8};
function exibirValores({g, h}){
    console.log(`g: ${g} | h: ${h}`)
}
exibirValores(obj4);


//11
const arr4 = [9, 10, 10];
function calcularMedia(...numeros){
    const total = numeros.reduce((acc, curr) => acc + curr, 0)
    return total / numeros.length;
}
console.log(calcularMedia(...arr4));


//12
const obj5 = {i: 9, j: 10};
const arr5 = [11, 12];
const combinedObjArr = {...obj5, arr: arr5};
console.log(combinedObjArr);


//13
const arr6 = [13, 14, 8, 9, 10, 11, 12, 17, 18, 19, 20];
const newArr = [...arr6, 15, 16];
console.log(newArr);


//ex - 1
const frutas = ["Maçã", "Banana", "Uva"];
const copiaFrutas = [...frutas];
console.log(copiaFrutas);


//ex - 2
const grupoA = ["Nicoly", "Bia"];
const grupoB = ["Hannah", "Belly"];
const todosAlunos = [...grupoA, ...grupoB];
console.log(todosAlunos);


//ex - 3
const usuario = { nome: "Carlos", idade: 25 };
const usuarioAtualizado = { ...usuario, cidade: "São Paulo" };
console.log(usuarioAtualizado);


//ex - 4
const produto = { id: 1, nome: "Teclado", preco: 100 };
const produtoComDesconto = { ...produto, preco: 80 };
console.log(produtoComDesconto);


//ex - 5
const listaAtual = [{ nome: "Mouse" }, { nome: "Monitor" }];
const novoItem = { nome: "Webcam" };

function adicionarProdutos(lista, produto) {
    return [...lista, produto];
}

const listaNova = adicionarProdutos(listaAtual, novoItem);
console.log("Original:", listaAtual);
console.log("Nova:", listaNova);