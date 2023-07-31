"use strict";
class Correntista {
    constructor(nome, cpf, dataNascimento, telefone) {
        // Construtor da classe, recebe nome, CPF, data de nascimento e telefone e inicializa os atributos
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
    }
    modificarNome(nome) {
        // Método para modificar o nome do correntista
        this.nome = nome;
    }
    obterNome() {
        // Método para obter o nome do correntista
        return this.nome;
    }
    modificarCpf(cpf) {
        // Método para modificar o CPF do correntista
        this.cpf = cpf;
    }
    obterCpf() {
        // Método para obter o CPF do correntista
        return this.cpf;
    }
    modificarDataNascimento(dataNascimento) {
        // Método para modificar a data de nascimento do correntista
        this.dataNascimento = dataNascimento;
    }
    obterDataNascimento() {
        // Método para obter a data de nascimento do correntista
        return this.dataNascimento;
    }
    modificarTelefone(telefone) {
        // Método para modificar o telefone do correntista
        this.telefone = telefone;
    }
    obterTelefone() {
        // Método para obter o telefone do correntista
        return this.telefone;
    }
}
// Exemplo de uso da classe Correntista
const dataNascimento = new Date("1990-01-15"); // Exemplo de data de nascimento: 15 de janeiro de 1990
const correntista = new Correntista("Fulano de Tal", "12345678901", dataNascimento, "(00) 1234-5678");
console.log("Nome:", correntista.obterNome()); // Exibe o nome do correntista no console
console.log("CPF:", correntista.obterCpf()); // Exibe o CPF do correntista no console
console.log("Data de Nascimento:", correntista.obterDataNascimento()); // Exibe a data de nascimento do correntista no console
console.log("Telefone:", correntista.obterTelefone()); // Exibe o telefone do correntista no console
