export class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia;
        this.mes = mes;
        this.ano = 2023;
    }

    validarDia(dia: number): boolean{
        if (dia >= 1 && dia <= 31) {
            return true;
        }
        return false;
    }

    modificarDia(dia: number): void{
        this.dia = dia;
    }

    obterDia(): number {
        return this.dia;
    }

    validarMes(mes: number): boolean{
        if (mes >= 1 && mes <= 12) {
            return true;
        }
        return false;
    }

    modificarMes(mes: number): void{
        this.mes = mes;
    }

    obterMes(): number {
        return this.mes;
    }

    validarAno(dia: number): boolean{
        if (dia >= 2023) {
            return true;
        }
        return false;
    }

    modificarAno(ano: number): void{
        this.ano = ano;
    }

    obterAno(): number {
        return this.ano;
    }

    obterData(): string {
        return (`${this.dia}/${this.mes}/${this.ano}.`);
    }
}