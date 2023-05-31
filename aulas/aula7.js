//FUNÇÕES
//prompt é uma função
//parseInt é uma função
// return é para devolver alguma coisa

/**
 * Receber 3 números e dizer se esses três números formam um
 * triângulo retângulo.
 */
function triangulo(hp, c1, c2) {
    if (h1 > 0 && c1> 0 && c2 > 0){
        return hp ** 2 == c1 ** 2 + c2 ** 2;
    }
    return false;
}

console.log(triangulo(5, 4, 3));
console.log(triangulo(4, 4, 4));

let hp = 5;
let c1 = 3;
let c2 = 3;

if (triangulo(hp, c1, c2)) {
    document.write('<p>É um triângulo retângulo.</p>');
} else {
    document.write('<p>Não é um triângulo retângulo.</p>');
}

/**
 * Receber um número inteiro n e dizer se o número é par é
 * divisível por 2.
 */
function par(n){
    return n % 2 == 0;
}
console.log(par(30));
console.log(par(31));

/**
 * Receber um número inteiro "n" maior que 0 e 1
 * e calcular o seu fatorial.
 */
function fatorial(n){
    let fat = 1;
    while (i >= 2) {
        fat = fat * n;
        n--;
    }
    return fat;
}

console.log(fat(8));