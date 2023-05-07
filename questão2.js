let primeirosdigitos = +prompt("Digite os 9 primeiros números do CPF: ");

let multD1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let S1 = 0;

for (let i = 0; i < 10; i++){
    S1 += parseInt(primeirosdigitos[i]) * multD1[i];
}

let restoD1 = S1 % 11;

let d1 = "";
if(restoD1 < 2){
    d1 = 0;
} else{
    d1 = (11 - restoD1);
}

let multD2 = [10, 9, 8, 7, 6, 5, 4, 3];
let S2 = 0;

for (let i = 0; i < 9; i++){
    S2 += parseInt(primeirosdigitos[i]) * multD2[i] + d1 * 2;
}

let restoD2 = S2 % 11;
let d2 = "";
if(restoD2 < 2){
    d2 = 0;
} else{
    d2 = (11 - restoD2);
}

console.log(`Dígitos verificadores: ${d1}${d2}`);