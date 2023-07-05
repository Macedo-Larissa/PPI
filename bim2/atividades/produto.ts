export class Produto {
    nome: string;
    categoria: string;
    marca: string;
    descricao: string;
    preco: number;
    quantidade: number;

    constructor (nm: string, categ: string, mac: string, desc: string, prec: number, qtd: number){
        this.nome = nm;
        this.categoria = categ;
        this.marca = mac;
        this.descricao = desc;
        this.preco = prec;
        this.quantidade = qtd;
    }
}