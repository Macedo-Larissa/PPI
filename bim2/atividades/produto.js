"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nm, categ, mac, desc, prec, qtd) {
        this.nome = nm;
        this.categoria = categ;
        this.marca = mac;
        this.descricao = desc;
        this.preco = prec;
        this.quantidade = qtd;
    }
}
exports.Produto = Produto;
