import { Data } from "./questao1";

export class Voo {
    private data: Data[];
    private numero: number;
    private reservas: number;

    constructor(data: Data[], numero: number) {
        this.data = data;
        this.numero = numero;
        this.reservas = 0;
    }

    validarReservas(reservas: number): boolean {
        if (this.reservas >= 0 && this.reservas <= 8) {
            this.reservas ++;
            return true;
        }
        return false;
    }

    ocupado(){

    }

    quantidadeOcupados(){
        
    }
}