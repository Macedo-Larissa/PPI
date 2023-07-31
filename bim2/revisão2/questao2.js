"use strict";
// class Conta {
//     private numeroConta: string;
//     private saldo: number;
//     private correntista: Correntista;
//     constructor(numeroConta: string, correntista: Correntista) {
//       this.numeroConta = numeroConta;
//       this.saldo = 0;
//       this.correntista = correntista;
//     }
//     obterSaldo(): number {
//       return this.saldo;
//     }
//     temSaldo(): boolean {
//       return this.saldo > 0;
//     }
//     depositar(quantia: number): boolean {
//       if (quantia > 0) {
//         this.saldo += quantia;
//         return true;
//       }
//       return false;
//     }
//     debitar(quantia: number): boolean {
//       if (this.saldo >= quantia && quantia > 0) {
//         this.saldo -= quantia;
//         return true;
//       }
//       return false;
//     }
//     transferir(quantia: number, contaDestino: Conta): boolean {
//       if (this.debitar(quantia)) {
//         contaDestino.depositar(quantia);
//         return true;
//       }
//       return false;
//     }
//   }
//   // Exemplo de uso da classe Correntista e Conta
//   // Criando um correntista
//   const dataNascimento = new Date("1990-01-15"); // Exemplo de data de nascimento: 15 de janeiro de 1990
//   const correntista1 = new Correntista("Fulano de Tal", "12345678901", dataNascimento, "(00) 1234-5678");
//   // Criando as contas com o correntista associado
//   const conta1 = new Conta("12345-6", correntista1);
//   const conta2 = new Conta("54321-0", correntista1);
//   // Adicionando dinheiro na conta1
//   conta1.depositar(1000);
//   // Consultando o saldo da conta1
//   console.log("Saldo da conta1:", conta1.obterSaldo());
//   // Debitando dinheiro da conta1
//   conta1.debitar(500);
//   // Transferindo uma quantia da conta1 para a conta2
//   conta1.transferir(300, conta2);
//   // Exibindo o saldo da conta2
//   console.log("Saldo da conta2:", conta2.obterSaldo());
//--------------------------
// Classe Correntista
// class Correntista {
//     private nome: string;
//     private cpf: string;
//     private dataNascimento: Date;
//     private telefone: string;
//     constructor(nome: string, cpf: string, dataNascimento: Date, telefone: string) {
//       this.nome = nome;
//       this.cpf = cpf;
//       this.dataNascimento = dataNascimento;
//       this.telefone = telefone;
//     }
//     // Métodos para modificar e obter os atributos do Correntista
//     // (implementação igual ao exemplo anterior)
//   }
//   // Classe Conta
//   class Conta {
//     private numero: number;
//     private saldo: number;
//     private correntista: Correntista;
//     constructor(numero: number, correntista: Correntista) {
//       this.numero = numero;
//       this.saldo = 0; // Saldo inicial é zero
//       this.correntista = correntista;
//     }
//     public obterSaldo(): number {
//       return this.saldo;
//     }
//     public temSaldo(): boolean {
//       return this.saldo > 0;
//     }
//     public depositar(quantia: number): boolean {
//       if (quantia > 0) {
//         this.saldo += quantia;
//         return true;
//       }
//       return false;
//     }
//     public debitar(quantia: number): boolean {
//       if (this.saldo >= quantia && quantia > 0) {
//         this.saldo -= quantia;
//         return true;
//       }
//       return false;
//     }
//     public transferir(quantia: number, c1: Conta, c2: Conta): boolean {
//       if (c1.saldo >= quantia && quantia > 0) {
//         c1.saldo -= quantia;
//         c2.saldo += quantia;
//         return true;
//       }
//       return false;
//     }
//   }
//   // Exemplo de uso do sistema de Conta e Correntista
//   // Criando correntistas
//   const correntista1 = new Correntista("Fulano de Tal", "12345678900", new Date(1990, 5, 15), "(00) 1234-5678");
//   const correntista2 = new Correntista("Ciclana da Silva", "98765432100", new Date(1985, 10, 25), "(00) 9876-5432");
//   // Criando contas
//   const conta1 = new Conta(1, correntista1);
//   const conta2 = new Conta(2, correntista2);
//   // Operações com a conta1
//   conta1.depositar(1000);
//   console.log("Saldo da conta1:", conta1.obterSaldo()); // Exibe o saldo da conta1
//   conta1.debitar(500);
//   console.log("Saldo da conta1:", conta1.obterSaldo()); // Exibe o saldo da conta1 após o débito
//   // Transferindo dinheiro da conta1 para a conta2
//   conta1.transferir(300, conta1, conta2);
//   // Exibindo o saldo da conta2 após a transferência
//   console.log("Saldo da conta2:", conta2.obterSaldo());
