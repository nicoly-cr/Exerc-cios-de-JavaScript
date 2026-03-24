<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Média da Turma</title>
    </head>
    <body>

        <h3>Digite suas notas e descubra sua média!</h3>

        <input type="number" id="nota" placeholder="Nota (0-10)">
        <button onclick="adicionar()">Adicionar</button>
        <button onclick="calcular()">Média</button>

        <p>Notas: <span id="exibirNotas"></span></p>
        <p id="exibirMedia"></p>

        <script>
            let lista = [];

            function adicionar() {
                let n = parseFloat(document.getElementById("nota").value);

                if (lista.length < 5 && n >= 0 && n <= 10) {
                    lista.push(n);
                    
                    let texto = "";
                    for (let i = 0; i < lista.length; i++) {
                        texto += lista[i] + "    |    ";
                    }
                    document.getElementById("exibirNotas").innerHTML = texto;
                } else {
                    alert("Nota inválida ou limite de 5 atingido!");
                }
                document.getElementById("nota").value = "";
            }

            function calcular() {
                let soma = 0;
                for (let i = 0; i < lista.length; i++) {
                    soma += lista[i];
                }
                let media = soma / lista.length;
                document.getElementById("exibirMedia").innerHTML = "Resultado: " + media.toFixed(1);
            }
        </script>

    </body>
</html>