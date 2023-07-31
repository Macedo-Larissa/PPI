export class Produto {
    private codigo: number;
    private preco: number;
    private descricao: string;

    constructor(cod: number, preco: number, desc: string) {
        this.codigo = cod;
        this.preco = preco;
        this.descricao = desc;
    }

    getCodigo(): number {
        return this.codigo;
    }

    getPreco(): number {
        return this.preco;
    }

    getDescricao(): string {
        return this.descricao;
    }
}

export class ItemPedido {
    private produto: Produto;
    private quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    getProduto(): Produto {
        return this.produto;
    }

    getQuantidade(): number {
        return this.quantidade;
    }
}

export class Pedido {
    private itens: ItemPedido[];

    constructor() {
        this.itens = [];
    }

    adicionar_item(item: ItemPedido): void {
        this.itens.push(item);
    }

    obter_total(): number {
        let total = 0;
        for (const item of this.itens) {
            total += item.getProduto().getPreco() * item.getQuantidade();
        }
        return total;
    }
}