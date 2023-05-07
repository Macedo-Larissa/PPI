let nome = window.prompt("Digite seu nome:");
let qtdias = window.prompt("Quantos dias passaram com veículo?");
let total = qtdias * 80;

console.log(`Sr.(a) ${nome}, você deve pagar R$${total},00 pelo aluguel de ${qtdias} de dias.`);