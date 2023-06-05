// //1
function ola() {
    document.write("<p>Bom dia!</p>");
}

console.log(ola());

// //2
function cubo(num) {
    num = +prompt("Digite um número para calcular o cubo dele: ");
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
    numero = +prompt("Digite um número para invertê-lo: ");
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
    texto = texto.toLowerCase();
    for (var i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
            cont++; //Incrementa a contagem de vogais
        }
    }
    return cont;
}

console.log(contaVogais("larissa"));

//8
function montante(capital, taxa, tempo) {
    capital = +prompt("Digite o capital investido: ");
    taxa = +prompt("Digite a taxa (em meses): ");
    tempo = +prompt("Digite o tempo (em meses): ");

    let montante = capital * (1 + taxa / 100) ** tempo;
    return montante.toFixed(2); //toFixed retorna a quantidade de casas decimais que você quer.
}

console.log(montante());

//9
// function fatorial (n) {
//     n = +prompt("Digite um número: ");

//     if (n < 0) {
//         return "Número inválido";
//     } 
//     if (n == 1 || n == 0) {
//         return 1; //caso base
//     } else {
//         return n * fatorial(n - 1); //vai rodando cada um (antecessor)
//     }
// }

// console.log(fatorial());

//9
function factorialize(n) {
    n = +prompt("Digite um número para calcular seu fatorial: ");
    var result = n;

    if (n === 0 || n === 1)
        return 1;
    while (n > 1) {
        n--;  // diminuir 1 a cada iteração
        result *= n; //ou result = result * num;
    }
    return result;
}
/* O que está acontecendo
                    num           num--      var result      result *= num         
    1ª iteração:   5             4            5             20 = 5 * 4      
    2ª iteração:   4             3           20             60 = 20 * 3
    3ª iteração:   3             2           60            120 = 60 * 2
    4ª iteração:   2             1          120            120 = 120 * 1
    5ª iteração:   1             0          120
    Fim do laço WHILE 
*/
console.log(factorialize());

/* 10
 Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. 
 Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
*/
function contaLetras(texto, letra) {
    var cont = 0;
    texto = texto.toLowerCase(); //Coloca texto em minúsculas
    for (var i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == letra) {
            cont++; //Incrementa contagem
        }
    }
    return cont;
}

console.log(contaLetras("abacaxi", "a"));

/* 11
Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.
*/
// function numeroPrimo(n) {

//     // Verificar se número é igual a 1 (não é primo)
//     if (n === 1) {
//         return "Número 1 não é primo.";
//     }
//     // Verificar se número é menor do 1 (não são primos)
//     else if (n < 1) {
//         return "Números menores que 1 não são primos.";
//     }
//     else {
//         for (i = 2; i < n; i++) {
//             if (n % i == 0) {
//                 primo = false;
//                 break;
//             }
//         }
//     }

//     if (primo) {
//         return `${n} é um número primo`;
//     }
//     else {
//         return `${n} não é um número primo`;
//     }
// }