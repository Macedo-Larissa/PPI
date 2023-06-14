const cpfBase = +prompt("Digite os 9 primeiros algarismos do CPF:");

// Cálculo do dígito d1
const multiplicadoresD1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let somaD1 = 0;
for (let i = 0; i < 9; i++) {
  somaD1 += parseInt(cpfBase[i]) * multiplicadoresD1[i];
}
const restoD1 = somaD1 % 11;
const d1 = (restoD1 < 2) ? 0 : 11 - restoD1;

// Cálculo do dígito d2
const multiplicadoresD2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
let somaD2 = 0;
for (let i = 0; i < 10; i++) {
  somaD2 += parseInt(cpfBase[i]) * multiplicadoresD2[i];
}
const restoD2 = somaD2 % 11;
const d2 = (restoD2 < 2) ? 0 : 11 - restoD2;

console.log(`Dígitos verificadores: ${d1}${d2}`);
