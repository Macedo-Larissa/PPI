"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cachorroclass_1 = require("./cachorroclass");
let hiro = new cachorroclass_1.Cachorro('Hiro', cachorroclass_1.Raça.GOLDEN);
let kori = new cachorroclass_1.Cachorro('Kori', cachorroclass_1.Raça.HUSKY);
console.log(hiro);
console.log(kori);
console.log(`Nome: ${kori.obterNome()}`);
kori.inserirIdade(3);
console.log(kori.obterIdade());
kori.inserirIdade(30);
console.log(kori.obterIdade());
console.log(hiro.latir(4));
// se você quiser imprimir apenas um atributo, você coloca 
// console.log(hiro.nome);
