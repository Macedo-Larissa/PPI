export class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dd: number, mm: number, aa: number) {
        this.modificarDia(dd);
        this.modificarMes(mm);
        this.modificarAno(aa);
    }

    modificarDia(dia: number) {
        if (dia >= 1 && dia <= 31) {
            this.dia = dia;
        } else {
            this.dia = 1;
        }
    }

    obterDia(): number {
        return this.dia;
    }

    modificarMes(mm: number) {
        if (mm >= 1 && mm <= 12) {
            this.mes = mm;
        } else {
            this.mes = 1;
        }
    }
    obterMes(): number {
        return this.mes;
    }

    modificarAno(aa: number) {
        const anoAtual = new Date().getFullYear();
        if (aa >= anoAtual) {
            this.ano = aa;
        } else {
            this.ano = anoAtual;
        }
    }

    obterAno(): number {
        return this.ano;
    }

    obterData(): string {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}