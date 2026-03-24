let alunos = ["Ana", "Carlos", "Mariana", "Pedro", "Juliana"];

function buscarAluno(){
    let nomeDigitado = document.getElementById("nomeBusca").value;

    nomeDigitado = nomeDigitado.toLowerCase();

    let encontrado = false;

    for (let i = 0; i < alunos.length; i++){
        if(alunos[i].toLowerCase()=== nomeDigitado){
            encontrado = true;
            break;
        }
    }

    let resultado = document.getElementById("resultado");

    if(encontrado){
        resultado.textContent = `Aluno(a) ${nomeDigitado} encontrado(a).`;
        resultado.style.color = "green";
    }else{
        resultado.textContent = `Aluno(a) ${nomeDigitado} não encontrado(a).`;
        resultado.style.color = "red";   
    }
}