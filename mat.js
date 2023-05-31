/** 
 * Recebe 3 números e diz se esses números formam um 
 * triângulo retângulo.
 * @param hp número inteiro com o valor da hipotenusa
 * @param c1 número inteiro com o valor do cateto 1
 * @param c2 número inteiro com o valor do cateto 2
 * 
 * @return true se formar um triângulo retângulo e false caso contrário.
 */
function triangulo(hp, c1, c2) {
    return hp ** 2 == c1 ** 2 + c2 ** 2;
}

/** 
 * Recebe um número inteiro 'n' e diz se ele é 'par' ou não.
 * Número é par se for divisível por 2 (n % 2 == 0) 
 */
function par(n) {
    return n % 2 == 0;
}

/** 
 * Recebe um número inteiro 'n' maior ou igual a zero (n >= 0) e 
 * calcula o seu fatorial.
 */
function fatorial(n) {
    let fat = 1;
    while (n >= 2) {
        fat = fat * n;
        n--;
    }
    return fat;
}

function fatorial2(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fatorial2(n - 1);
    }
}

/** Recebe um número inteiro (>= 2) e diz se este número é ou não primo */