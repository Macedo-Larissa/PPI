import { Cachorro, Raça } from "./cachorroclass";

let hiro = new Cachorro('Hiro', Raça.GOLDEN);
let kori = new Cachorro('Kori', Raça.HUSKY);

console.log(hiro); 
console.log(kori);

// se você quiser imprimir apenas um atributo, você coloca 
// console.log(hiro.nome);