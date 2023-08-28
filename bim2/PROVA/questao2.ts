import { Data } from "./questao1";

export class Voo {
    private data: Data;
    private numero: number;
    private reservas: boolean[];

    constructor(data: Data, num: number) {
        this.data = data;
        this.numero = num;
        this.reservas = [false, false, false, false, false, false, false, false];
    }

    ocupado(num: number): boolean {
        if (num >= 0 && num < this.reservas.length) {
            return this.reservas[num];
        }
    }

    quantidadeOcupados(): number {
        let quant = 0;
        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i] == true) {
                quant++;
            }
        }
        return quant;
    }

    reservar(num: number) {
        if (!this.ocupado(num)) {
            this.reservas[num] = true;
            return true;
        }
        return false;
    }
}