"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = exports.Televisão = void 0;
class Televisão {
    constructor() {
        this.volume = 0;
        this.canal = 0;
    }
    alterarVolume(volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }
    obterVolume() {
        return this.volume;
    }
    alterarCanal(canal) {
        if (canal >= 0 && canal <= 800) {
            this.canal = canal;
        }
    }
    obterCanal() {
        return this.canal;
    }
}
exports.Televisão = Televisão;
class Controle {
    constructor(tv) {
        this.tv = tv;
    }
    aumentarVolume() {
        const volumenovo = this.tv.obterVolume();
        if (volumenovo < 100) {
            this.tv.alterarVolume(volumenovo + 1);
        }
    }
    diminuirVolume() {
        const volumenovo = this.tv.obterVolume();
        if (volumenovo > 0) {
            this.tv.alterarVolume(volumenovo - 1);
        }
    }
    consultarVolume() {
        return this.tv.obterVolume();
    }
    aumentarCanal() {
        const canalAtual = this.tv.obterCanal();
        if (canalAtual < 800) {
            this.tv.alterarCanal(canalAtual + 1);
        }
    }
    diminuirCanal() {
        const canalAtual = this.tv.obterCanal();
        if (canalAtual > 0) {
            this.tv.alterarCanal(canalAtual - 1);
        }
    }
    trocarCanal(canal) {
        this.tv.alterarCanal(canal);
    }
    consultarCanal() {
        return this.tv.obterCanal();
    }
}
exports.Controle = Controle;
