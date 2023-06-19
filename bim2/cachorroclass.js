"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Raça = void 0;
var Raça;
(function (Raça) {
    Raça["GOLDEN"] = "Golden";
    Raça["HUSKY"] = "Husky";
    Raça["SALSICHA"] = "Salsicha";
    Raça["LABRADOR"] = "Labrador";
    Raça["CARAMELO"] = "Caramelo";
    Raça["PASTORALEM\u00C3O"] = "Pastor Alem\u00E3o";
    Raça["ROTTWEILER"] = "Rottweiler";
    Raça["PITBULL"] = "Pit Bull";
    Raça["POODLE"] = "Poodle";
})(Raça || (exports.Raça = Raça = {}));
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
        this.idade = 0;
    }
    latir(quant) {
        let latido = '';
        for (let i = 0; i < quant; i++) {
            latido += 'Au';
        }
        return latido;
    }
    inserirNome(nm) {
        this.nome = nm;
    }
    obterNome() {
        return this.nome;
    }
    inserirIdade(id) {
        if (id >= 0 && id <= 25) {
            this.idade = id;
        }
    }
    obterIdade() {
        return this.idade;
    }
    inserirRaca(rc) {
        this.raca = rc;
    }
    obterRaca() {
        return this.raca;
    }
}
exports.Cachorro = Cachorro;
