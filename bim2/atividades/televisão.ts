export class Televisão {
    private volume: number;
    private canal: number;

    constructor() {
        this.volume = 0;
        this.canal = 0;
    }

    alterarVolume(volume: number) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }

    obterVolume(): number {
        return this.volume;
    }

    alterarCanal(canal: number) {
        if (canal >= 0 && canal <= 800) {
            this.canal = canal;
        }
    }

    obterCanal(): number {
        return this.canal;
    }
}

export class Controle {
    private tv: Televisão;

    constructor(tv: Televisão) {
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

    consultarVolume(): number {
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

    trocarCanal(canal: number) {
        this.tv.alterarCanal(canal);
    }

    consultarCanal(): number {
        return this.tv.obterCanal();
    }
}