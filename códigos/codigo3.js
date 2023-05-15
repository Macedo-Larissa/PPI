// Array para armazenar as notas dos estudantes
const notas = [];


// Variável para armazenar a soma das notas
let somaNotas = 0;


// Loop para ler as notas dos 10 estudantes
for (let i = 1; i <= 10; i++) {
  const nota = parseFloat(prompt(`Digite a nota do estudante ${i}:`));
  notas.push(nota);
  somaNotas += nota;
}


// Calcula a média aritmética da turma
const mediaTurma = somaNotas / notas.length;


// Conta a quantidade de notas que ficaram na média ou acima dela
let notasAcimaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= mediaTurma) {
    notasAcimaMedia++;
  }
}


// Exibe os resultados
console.log("Média da turma:", mediaTurma.toFixed(2));
console.log("Notas acima da média:", notasAcimaMedia);
