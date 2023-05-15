// let docentes = [
//     'Erika', 'Bruno', 'Rodrigo',
//     'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'
// ];

// document.write('<h1>Docentes INFO4V</h1>');
// document.write('<ul>');

// let i = 0; //1 - inicialização

// while(i < docentes.length) { //2 - teste
//     document.write(`<li>${docentes[i]}</li>`)
//     i++; //3 - atualização
// }

// document.write('</ul>');

//--------------------------------------------------------------------------------

// let docentes = [
//     'Erika', 'Bruno', 'Rodrigo',
//     'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'
// ];

// let buscar = prompt('Digite o nome de um docente:');

// let i = 0;
// let achar = false;

// while(i < docentes.length && !achar) {
//     if(buscar.trim().toLowerCase() == docentes[i].toLowerCase()) {
//         achar = true;
//     }
//     i++;
// }
// if(achar) {
//     document.write(`Docente ${buscar} encontrado na posição ${--i}`);
// } else {
//     document.write(`Docente não encontrado(a).`);
// }

// -------------------------------------------------------------------------------

// let op = -1; //opção a ser escolhida se quiser parar o programa
// do {
//     console.log(
//         `Opções\n
//         1 - Adicionar\n
//         2 - Editar\n
//         3 - Remover\n
//         -1 para sair`);
//     op = +prompt('Escolha uma opção:')
// } while( op != -1);

//--------------------------------------------------------------------------------

/*Soma dos números inteiros pares de 2 a 100*/
// let soma = 0;
// for (let par = 2; par <= 100; par += 2) {
//     soma += par;
// }
// console.log(`A soma dos inteiros pares de 2 a 100 é ${soma}`);

// -------------------------------------------------------------------------------
// primeiro exemplo usando o for

let docentes = [
    'Erika', 'Bruno', 'Rodrigo',
    'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'
];

document.write('<h1>Docentes INFO4V</h1>');
document.write('<ul>');

for (let i = 0; i < docentes.length; i++) {
    document.write(`<li>${docentes[i]}</li>`)
}

// docentes.forEach(doc => {
//     document.write(`<li>${doc}</li>`);
// });

// => é mesma coisa que function.

document.write('</ul>');

// --------------------------------------------------------------------------------