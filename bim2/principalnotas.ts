import { Nota } from "./notas";

let raissaPPI = new Nota(55, 75, 100, 100);
console.log(raissaPPI);
raissaPPI.alterarBim2(60);
console.log(raissaPPI);

let carlosSOR = new Nota(0, 30, 40, 78);
console.log(`Notas B3 Carlos = ${carlosSOR.obterBim3()}`);
console.log(`Média ${carlosSOR.calcularMediaParcial()}`);