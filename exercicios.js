// //1
function ola() {
    document.write("<p>Bom dia!</p>");
}

console.log(ola());

// //2
function cubo(num) {
    num = +prompt("Digite um número: ");
    return num ** 3;
    //return document.write(num ** 3);
}

console.log(cubo());

// //3
function conversao(temp) {
    let result = (temp - 32) * 5 / 9;
    //return document.write(result);
    return result;
}

console.log(conversao(32));
console.log(conversao(500));

// //4
function areatriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(areatriangulo(10, 5));
console.log(areatriangulo(7, 4));

// //5
function areaperimetro(raio) {
    raio = +prompt("Digite o valor do raio: ");
    let area = Math.PI * (raio) ** 2;
    let perimento = 2 * Math.PI * raio;
    //return [area, perimento]; //retorna mais de uma variável
    return {
        area,
        perimento
    };
}

console.log(areaperimetro());

// //6
function inverterNumero(numero) {
    numero = +prompt("Digite um número: ");
    var numeroString = numero.toString(); // Converter o número para uma string
    var arrayCaracteres = numeroString.split(''); // Dividir a string em um array de caracteres
    var arrayInvertido = arrayCaracteres.reverse(); // Inverter a ordem dos caracteres no array
    var numeroInvertido = arrayInvertido.join(''); // Unir os caracteres novamente em uma string

    return parseInt(numeroInvertido); // Converter a string invertida de volta para um número
}

console.log(inverterNumero());

//7
function contaVogais(texto) {
    var cont = 0;
    texto=texto.toLowerCase();
    for(var i=0; i<texto.length; i++){
        if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u"){
            cont++; //Incrementa a contagem de vogais
        }
    }
    return cont;
}

console.log(contaVogais("larissa"));

//8
