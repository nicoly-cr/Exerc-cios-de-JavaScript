const nome = "Nicoly";
let sobrenome = "Roviero";
var nomedomeio = "Corrêa";

const nomeCompleto = nome + " " + nomedomeio + " " + sobrenome;

const nomeCompletoMinusculo = nomeCompleto.toLowerCase();
console.log(nomeCompletoMinusculo);

const nomeCompletoMaiusculo = nomeCompleto.toUpperCase();
console.log(nomeCompletoMaiusculo);

const comprimentoNomeCompleto = nomeCompleto.length;
console.log(comprimentoNomeCompleto);

const indiceSobrenome = nomeCompleto.indexOf(sobrenome);
console.log(indiceSobrenome);

const parteDoNome = nomeCompleto.slice(0, 6);
console.log(parteDoNome);

const nomeCompletoAlterado = nomeCompleto.replace("Nicoly", "Ayumi");
console.log(nomeCompletoAlterado);

const partesDoNome = nomeCompleto.split(" ");
console.log(partesDoNome);

const nomeComEspacos = " " + nomeCompleto + " ";
const nomeSemEspacos = nomeComEspacos.trim();
console.log(nomeComEspacos);

const temSobrenome = nomeCompleto.includes(sobrenome);
console.log(temSobrenome);

const primeiraLetra = nomeCompleto.charAt(0);
console.log(primeiraLetra);

const parteDoNome2 = nomeCompleto.substring(0, 6);
console.log(parteDoNome2);

const comecaComNicoly = nomeCompleto.startsWith("Nicoly");
console.log(comecaComNicoly);

const terminaComRoviero = nomeCompleto.endsWith("Roviero");
console.log(terminaComRoviero);

const nomeRepetido = nome.repeat(3);
console.log(nomeRepetido);

const nomePaddedStart = nome.padStart(10, "*");
console.log(nomePaddedStart);

const nomePaddedEnd = nome.padEnd(10, "*");
console.log(nomePaddedEnd);

//ex - 1
function gerarUsuario(nome, meio, sobrenome) {
    return `${nome} ${meio} ${sobrenome}`.trim().toLowerCase().replaceAll(" ", "_");
}
console.log(gerarUsuario(nome, nomedomeio, sobrenome));

//ex - 2
function buscarPalavra(texto, alvo) {
    const palavras = texto.toLowerCase().split(" ");
    return palavras.filter(p => p.includes(alvo.toLowerCase())).length;
}
console.log(buscarPalavra(nomeCompleto, "Nicoly"));

//ex - 3
function formatarTitulo(texto) {
    return texto.toLowerCase().split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
}
console.log(formatarTitulo(nomeCompleto));

//ex - 4
function validarSenha(senha) {
    const temOito = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*]/.test(senha);
    return temOito && temMaiuscula && temMinuscula && temNumero && temEspecial;
}
console.log(validarSenha("Senha@123"));