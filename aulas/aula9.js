//exemplo usando arguments
function maximo() {
    if (arguments.length > 0) {
        let maior = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > maior) {
                maior = arguments[i];
            }
        }
        return maior;
    }
    return Number.NEGATIVE_INFINITY;
}

console.log(maximo(3));
console.log(maximo(1, 20, 35, 84, 13));

function potencia (base, exp = 2){
    let pot = 1;

    for (let i = 0; i < exp; i++) {
        pot = pot * base;
    }

    return pot;
}

console.log(potencia(3, 5));