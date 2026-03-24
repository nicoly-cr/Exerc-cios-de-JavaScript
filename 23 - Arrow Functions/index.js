const somar = (a,b) => {
    return a + b;
} 

const saudacao = (nome) => {
    return "Ola," +nome;
} 

//-----Arrow-----
console.log(saudacao("Nicoly"));
const saudacaoArrow = nome => "Ola," +nome;

//-----MAP-----
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(num => num * num);
console.log(quadrados);

//-----Filter-----
const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);

//-----Reduce-----
const numerosReduce = [1, 2, 3, 4, 5];
const soma = numerosReduce.reduce((total, num) => total + num);
console.log(soma);