"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questao2_1 = require("./questao2");
const aposento1 = new questao2_1.Aposento(101, 120); // Criando um aposento com número 101 e preço da diária 120 reais
const hospede1 = new questao2_1.Hospede("Jeniffer", "123.456.789-00", "(84)98002-8922", "Rua Palmeiras, n° 314, Parnamirim");
const hospede2 = new questao2_1.Hospede("Ariel", "987.654.321-00", "(84)98002-8922", "Rua Capitão América, n° 3, Natal");
const hospedagem1 = new questao2_1.Hospedagem(aposento1);
hospedagem1.hospedar(hospede1);
hospedagem1.hospedar(hospede2);
const quant_diarias = 5;
const total_a_pagar = hospedagem1.calcular_total(quant_diarias);
console.log(`Total a pagar: R$${total_a_pagar.toFixed(2)}`);
