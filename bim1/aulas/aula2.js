let sara = ['Larissa Macedo',
            243768,
            'Info',
            4,
            ['PPI', 'ESP', 'PDS', 'SOR']];
console.log(`Ano: ${sara[3]}`);
console.log(`Disciplinas: ${sara[4]}`);

//usando objeto - JSON
let gabriel = {
    "nome": "Gabriel Soares",
    "matr": 243768,
    "curso": "Informática",
    "ano": 4,
    "disciplina": ['PPI', 'ESP', 'PDS', 'SOR']
};
console.log(`Curso do estudante ${gabriel.nome} é ${gabriel.curso}`);

// () - método("possui" objeto antes) ou função(não possui objeto antes).
// criando uma classe
//let x = parseInt('23'); //função
//document.write(x); 

let data = new Date(); //método
const dia = data.getDate(); //dia do mês
const mes = data.getMonth() + 1; //mês 0-11 
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

document.write(`Parnamirim, ${dia}/${mes < 10 ? '0'+ mes : mes}/${ano}, 
                ${hora}h${min < 10 ? '0'+ min : min}min`);

let faustino = [92.0, 70.0, 20.5, 50.0];
console.log(`Bim3: ${faustino[2]}`);
faustino[2] = 61.0;
console.log(faustino);
let mp = (2*faustino[0] + 2*faustino[1] + 3*faustino[2] + 3*faustino[3]) / 10;
//colocando a média na última posição do array
faustino.push(mp);
console.log(faustino);

let faustino2 = {
    "b1" : 92.0,
    "b2" : 70.0,
    "b3" : 20.5,
    "b4" : 50.0
};
console.log(`Nota1 = ${faustino2.b1}, Nota2 = ${faustino2.b2}, Nota3 = ${faustino2.b3}, Nota4 = ${faustino2.b4}`);