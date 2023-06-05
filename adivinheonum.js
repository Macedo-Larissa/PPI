let gerarnum = gerarNumero();

function gerarNumero() {
    /*seu código aqui - sugestão: use a função Math.random()*/
    return Math.floor(Math.random() * 20) + 1;
}

function principal() {
    let palpite = parseInt(document.getElementById('palpite').value);
    let cmp = comparar(palpite, gerarnum);

    if (palpite === 0){
        alert("Por favor, insira um número válido de 1 a 20.");
    } else if (palpite > 20) {
        alert("Por favor, insira um número válido de 1 a 20.");
    }

    if (cmp === 0) {
        document.getElementById('resultado').innerHTML = 'Parabéns! Você acertou!';
    } else if (cmp === -1) {
        document.getElementById('resultado').innerHTML = 'Tente um número menor!';
    } else {
        document.getElementById('resultado').innerHTML = 'Tente um número maior!';
    }
    /*seu código aqui. Esta função não precisa de 'return' por
    servir apenas de interface com o código HTML e outras funções.*/;
}

function comparar(palpite, gerarnum) {
    if (palpite < gerarnum) {
        return -1;
    } else if (palpite === gerarnum) {
        return 0;
    } else {
        return 1;
    }
};