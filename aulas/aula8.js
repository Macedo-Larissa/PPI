// não pode declarar parâmetros dentro da função, apenas variáveis.

/**
 * Recebe um número inteiro (>= 2) e dizer se
 * este número é primo ou não
 */

function primo(n){
    if (n >= 2) {
        let pm = true;
        let i = 2;
        while (i < n && pm){
            if (n % i == 0){
                pm = false;
            }
            i++;
        }
        return pm;
    } else{
        return false;
    }
}

let x = 4
console.log(primo(x));
console.log(primo(5));

function multiplica (lista, n){
    for (let i = 0;
    i < lista.length;
    i++){
        
        lista[i] *= n;
    }
}