"use strict";
class Elevador {
    constructor(capacidade, totalAndares) {
        // Construtor da classe, recebe a capacidade e total de andares e inicia os atributos do elevador
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.andarAtual = 0; // O elevador sempre começa no térreo (andar 0)
        this.quantidadePessoas = 0; // Inicialmente, não há ninguém no elevador
        this.portaAberta = false; // A porta começa fechada
    }
    entrar(numPessoas) {
        // Método para permitir que pessoas entrem no elevador
        if (this.portaAberta && this.quantidadePessoas + numPessoas <= this.capacidade) {
            // Verifica se a porta está aberta e se há espaço para as pessoas entrarem
            this.quantidadePessoas += numPessoas; // Incrementa a quantidade de pessoas
            this.portaAberta = false; // Fecha a porta após as pessoas entrarem
            console.log(`${numPessoas} pessoa(s) entraram no elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }
    sair(numPessoas) {
        // Método para permitir que pessoas saiam do elevador
        if (this.portaAberta && this.quantidadePessoas > 0) {
            // Verifica se a porta está aberta e se há pessoas dentro do elevador
            const numPessoasSairam = Math.min(numPessoas, this.quantidadePessoas); // Calcula o número de pessoas que vão sair (mínimo entre o número solicitado e o número de pessoas no elevador)
            this.quantidadePessoas -= numPessoasSairam; // Decrementa a quantidade de pessoas
            this.portaAberta = false; // Fecha a porta após as pessoas saírem
            console.log(`${numPessoasSairam} pessoa(s) saíram do elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }
    subir() {
        // Método para fazer o elevador subir um andar
        if (this.andarAtual < this.totalAndares - 1) {
            // Verifica se o elevador não está no último andar (para não subir além do último)
            this.andarAtual++; // Incrementa o andar atual
            console.log(`Elevador subiu para o andar ${this.andarAtual}.`);
        }
    }
    descer() {
        // Método para fazer o elevador descer um andar
        if (this.andarAtual > 0) {
            // Verifica se o elevador não está no térreo (para não descer abaixo do térreo)
            this.andarAtual--; // Decrementa o andar atual
            console.log(`Elevador desceu para o andar ${this.andarAtual}.`);
        }
    }
    abrirPorta() {
        // Método para abrir a porta do elevador
        this.portaAberta = true; // Define o estado da porta como aberta
        console.log("Porta do elevador foi aberta.");
    }
    fecharPorta() {
        // Método para fechar a porta do elevador
        this.portaAberta = false; // Define o estado da porta como fechada
        console.log("Porta do elevador foi fechada.");
    }
}
// Exemplo de uso da classe Elevador
const meuElevador = new Elevador(8, 10); // Cria um elevador com capacidade para 8 pessoas e 10 andares
// Simula algumas ações no elevador para demonstração
meuElevador.abrirPorta();
meuElevador.entrar(5);
meuElevador.fecharPorta();
meuElevador.subir();
meuElevador.subir();
meuElevador.abrirPorta();
meuElevador.entrar(4);
meuElevador.fecharPorta();
meuElevador.descer();
meuElevador.abrirPorta();
meuElevador.sair(3);
meuElevador.abrirPorta();
meuElevador.sair(1);
//-----------------------------------------------------------------------------------------------------------
class Hospede {
    constructor(nome, cpf) {
        // Construtor da classe, recebe o nome e CPF e inicializa os atributos
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        // Método para obter o nome do hóspede
        return this.nome;
    }
    getCpf() {
        // Método para obter o CPF do hóspede
        return this.cpf;
    }
}
class Aposento {
    constructor(numero, precoDiaria) {
        // Construtor da classe, recebe o número do aposento e o preço da diária e inicializa os atributos
        this.numero = numero;
        this.precoDiaria = precoDiaria;
    }
    getNumero() {
        // Método para obter o número do aposento
        return this.numero;
    }
    getPrecoDiaria() {
        // Método para obter o preço da diária do aposento
        return this.precoDiaria;
    }
}
class Hospedagem {
    constructor(aposento) {
        // Construtor da classe, recebe o aposento e inicializa os atributos
        this.hospedes = [];
        this.aposento = aposento;
    }
    hospedar(hospede) {
        // Método para hospedar um hóspede, adicionando-o à lista de hospedes
        this.hospedes.push(hospede);
    }
    calcular_total(quant_diarias) {
        // Método para calcular o total da hospedagem com base na quantidade de diárias
        return this.aposento.getPrecoDiaria() * quant_diarias;
    }
}
// Exemplo de uso do sistema de hospedagem
const aposento1 = new Aposento(101, 120); // Cria um aposento com número 101 e preço da diária 120 reais
const hospede1 = new Hospede("Fulano de Tal", "123.456.789-00"); // Cria o primeiro hóspede
const hospede2 = new Hospede("Ciclana da Silva", "987.654.321-00"); // Cria o segundo hóspede
const hospedagem1 = new Hospedagem(aposento1); // Cria uma hospedagem com o aposento1
hospedagem1.hospedar(hospede1); // Adiciona o primeiro hóspede à hospedagem
hospedagem1.hospedar(hospede2); // Adiciona o segundo hóspede à hospedagem
const quant_diarias = 5; // Quantidade de diárias reservadas
const total_a_pagar = hospedagem1.calcular_total(quant_diarias); // Calcula o total a pagar
console.log(`Total a pagar: R$${total_a_pagar.toFixed(2)}`); // Exibe o total a pagar no console
// ---------------------------------------------------------------------------------------------------------
class Produto {
    constructor(nome, preco) {
        // Construtor da classe, recebe o nome e preço do produto e inicializa os atributos
        this.nome = nome;
        this.preco = preco;
    }
    getNome() {
        // Método para obter o nome do produto
        return this.nome;
    }
    getPreco() {
        // Método para obter o preço do produto
        return this.preco;
    }
}
class ItemPedido {
    constructor(produto, quantidade) {
        // Construtor da classe, recebe o produto e a quantidade e inicializa os atributos
        this.produto = produto;
        this.quantidade = quantidade;
    }
    getProduto() {
        // Método para obter o produto associado ao item
        return this.produto;
    }
    getQuantidade() {
        // Método para obter a quantidade comprada do produto
        return this.quantidade;
    }
}
class Pedido {
    constructor() {
        // Construtor da classe, inicializa a lista de itens vazia
        this.itens = [];
    }
    adicionar_item(item) {
        // Método para adicionar um item à lista de itens do pedido
        this.itens.push(item);
    }
    obter_total() {
        // Método para calcular o total do pedido percorrendo a lista de itens
        let total = 0;
        for (const item of this.itens) {
            // Para cada item do pedido, multiplica o preço do produto pela quantidade comprada e soma ao total
            total += item.getProduto().getPreco() * item.getQuantidade();
        }
        return total;
    }
}
// Exemplo de uso do sistema de compra de produtos
const produto1 = new Produto("Camiseta", 50); // Cria um produto "Camiseta" com preço 50 reais
const produto2 = new Produto("Calça Jeans", 100); // Cria um produto "Calça Jeans" com preço 100 reais
const produto3 = new Produto("Tênis", 80); // Cria um produto "Tênis" com preço 80 reais
const item1 = new ItemPedido(produto1, 2); // Cria um item do pedido com 2 unidades da "Camiseta"
const item2 = new ItemPedido(produto2, 1); // Cria um item do pedido com 1 unidade da "Calça Jeans"
const item3 = new ItemPedido(produto3, 3); // Cria um item do pedido com 3 unidades do "Tênis"
const pedido = new Pedido(); // Cria um novo pedido
pedido.adicionar_item(item1); // Adiciona o item1 ao pedido
pedido.adicionar_item(item2); // Adiciona o item2 ao pedido
pedido.adicionar_item(item3); // Adiciona o item3 ao pedido
const total_pedido = pedido.obter_total(); // Calcula o total do pedido
console.log(`Total do pedido: R$${total_pedido.toFixed(2)}`); // Exibe o total do pedido no console
