// var cont = 0;

// let texto = prompt("Digite um texto: ");
// let strtexto = texto.toString();
// let numtexto = strtexto.split('');

// return numtexto.length;

function contaTexto(texto){
    texto = prompt("Digite um texto: ");
    var cont = 0;

    for (let i = 0; i < texto.length; i++) {
        cont++;
    } 
    return cont;
}

console.log(contaTexto());
