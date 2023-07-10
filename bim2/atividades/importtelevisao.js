"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const televis_o_1 = require("./televis\u00E3o");
let samsung = new televis_o_1.Televisão();
let controle = new televis_o_1.Controle(samsung);
controle.aumentarVolume();
console.log(controle.consultarVolume());
controle.aumentarCanal();
console.log(controle.consultarCanal());
controle.trocarCanal(5);
console.log(controle.consultarCanal());