let quantidade = parseInt(prompt("Digite a quantidade de números que serão lidos:"));
let numeroMaximo = 0;

for (let i = 1; i <= quantidade; i++) {
  let numero = parseFloat(prompt("Digite o número " + i + ":"));
  if (numero > numeroMaximo) {
    numeroMaximo = numero;
  }
}

console.log("O número máximo é: " + numeroMaximo);