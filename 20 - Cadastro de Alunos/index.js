// Array que armazenará os alunos
let alunos = [];

// --- Funções de Máscara ---

function mascaraCPF(i) {
    let v = i.value;
    v = v.replace(/\D/g, ""); // Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); 
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); 
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    i.value = v;
}

function mascaraTelefone(i) {
    let v = i.value;
    v = v.replace(/\D/g, ""); 
    v = v.replace(/^(\d{2})(\d)/g, "($1)$2"); 
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); 
    i.value = v;
}

// --- Função de Cadastro ---

function cadastrarAluno() {
    // Captura os valores dos campos
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;

    // Validações
    if (!validarNomeCompleto(nome)) {
        alert("Por favor, digite o nome completo (nome e sobrenome).");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Telefone inválido! Formato: (99)99999-9999");
        return;
    }

    if (!validarEmail(email)) {
        alert("Email inválido!");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido!");
        return;
    }

    // Criando objeto aluno
    let aluno = {
        nome: nome,
        telefone: telefone,
        email: email,
        cpf: cpf
    };

    // Inserindo no array
    alunos.push(aluno);

    listarAlunos();
    limparCampos();
}

// --- Funções de Validação ---

function validarNomeCompleto(nome) {
    let nomeLimpo = nome.trim();
    // Verifica se tem um espaço e se o nome não é curto demais
    return nomeLimpo.includes(" ") && nomeLimpo.length > 5;
}

function validarTelefone(telefone) {
    // Regex para (99)99999-9999 ou (99)9999-9999
    let regex = /^\(\d{2}\)\d{4,5}-\d{4}$/;
    return regex.test(telefone);
}

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove pontos e traço
    
    // Verifica se tem 11 dígitos ou se é sequência repetida
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    // Algoritmo de validação de dígitos verificadores
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

function listarAlunos() {
    let lista = document.getElementById("listaAlunos");
    lista.innerHTML = ""; 

    for (let i = 0; i < alunos.length; i++) {
        let li = document.createElement("li");
        li.textContent =
            alunos[i].nome + " | " +
            alunos[i].telefone + " | " +
            alunos[i].email + " | " +
            alunos[i].cpf;
        lista.appendChild(li);
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
}