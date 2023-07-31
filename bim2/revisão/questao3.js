"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = exports.ItemPedido = exports.Produto = void 0;
class Produto {
    constructor(cod, preco, desc) {
        this.codigo = cod;
        this.preco = preco;
        this.descricao = desc;
    }
    getCodigo() {
        return this.codigo;
    }
    getPreco() {
        return this.preco;
    }
    getDescricao() {
        return this.descricao;
    }
}
exports.Produto = Produto;
class ItemPedido {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    getProduto() {
        return this.produto;
    }
    getQuantidade() {
        return this.quantidade;
    }
}
exports.ItemPedido = ItemPedido;
class Pedido {
    constructor() {
        this.itens = [];
    }
    adicionar_item(item) {
        this.itens.push(item);
    }
    obter_total() {
        let total = 0;
        for (const item of this.itens) {
            total += item.getProduto().getPreco() * item.getQuantidade();
        }
        return total;
    }
}
exports.Pedido = Pedido;
