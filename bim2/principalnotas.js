"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notas_1 = require("./notas");
let raissaPPI = new notas_1.Nota(55, 75, 100, 100);
console.log(raissaPPI);
raissaPPI.alterarBim2(60);
console.log(raissaPPI);
let carlosSOR = new notas_1.Nota(0, 30, 40, 78);
console.log(`Notas B3 Carlos = ${carlosSOR.obterBim3()}`);
// console.log(`Média ${carlosSOR.calcularMediaParcial()}`);
