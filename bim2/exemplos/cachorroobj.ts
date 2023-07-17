import { Cachorro, Raça } from "./cachorroclass";

let hiro = new Cachorro('Hiro', Raça.GOLDEN);
let kori = new Cachorro('Kori', Raça.HUSKY);

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