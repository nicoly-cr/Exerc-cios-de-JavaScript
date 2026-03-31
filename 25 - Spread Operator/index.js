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
