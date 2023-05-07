let voto = -1;
let votoscandidatos = [0, 0, 0, 0];
let votosbrancos = 0;
let votosnulos = 0;
do {
    voto = parseInt(prompt("Vote: \n11 para Cecília Meireles \n33 para Ariano Suassuna \n44 para Machado de Assis \n99 para Graciliano Ramos \n0  para voto em branco \nQualquer outro número para voto nulo \n1234 para encerrar \nDigite o número do candidato: "));
    if (voto === 11) {
        votoscandidatos[0]++;
    } else if (voto === 33) {
        votoscandidatos[1]++;
    } else if (voto === 44) {
        votoscandidatos[2]++;
    } else if (voto === 99) {
        votoscandidatos[3]++;
    } else if (voto === 0) {
        votosbrancos++;
    } else if (voto !== 1234) {
        votosnulos++;
    }
} while (voto !== 1234);

console.log("Total de votos para cada candidato:");
console.log("Cecília Meireles (11): " + votoscandidatos[0]);
console.log("Ariano Suassuna (33): " + votoscandidatos[1]);
console.log("Machado de Assis (44): " + votoscandidatos[2]);
console.log("Graciliano Ramos (99): " + votoscandidatos[3]);
console.log("Total de votos em branco: " + votosbrancos);
console.log("Total de votos nulos: " + votosnulos);