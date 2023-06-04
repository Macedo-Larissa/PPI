var numeroGerado = gerarNumero();
function principal() {

    var btnEnviar = document.getElementById("enviar");
    btnEnviar.addEventListener("click", function () {
        var palpiteInput = document.getElementById("palpite");
        var palpite = parseInt(palpiteInput.value);

        if (isNaN(palpite)) {
            alert("Por favor, insira um número válido.");
        } else {
            var resultado = comparar(palpite, numeroGerado);
            alert(resultado);

            if (palpite === numeroGerado) {
                palpiteInput.disabled = true;
                btnEnviar.disabled = true;
                alert("Parabéns! Você acertou o número.");
            }
        }
    });
}

function gerarNumero() {
    return Math.floor(Math.random() * 20) + 1;
}

function comparar(palpite, gerado) {
    if (palpite < gerado) {
        return "O número gerado é maior que o seu palpite.";
    } else if (palpite > gerado) {
        return "O número gerado é menor que o seu palpite.";
    } else {
        return "Parabéns! Você acertou o número.";
    }
}

principal();
