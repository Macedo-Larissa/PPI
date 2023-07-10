import { Televisão, Controle } from "./televisão";

let samsung = new Televisão();
let controle = new Controle(samsung);

controle.aumentarVolume();
console.log(controle.consultarVolume());

controle.aumentarCanal();
console.log(controle.consultarCanal());

controle.trocarCanal(5);
console.log(controle.consultarCanal());