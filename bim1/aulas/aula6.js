//função JS

/**informa o preço final de um produto 
 * @param preco preço normal do produto.
 * @param opcao opção de pagamento.
 * @return o preço final do produto de acordo com a condição de pagamento escolhida.
 * Retorna -1 se a condição for incorreta.
*/

function precoFinal(preco, opcao) {
    let preco = +prompt("Digite o preço do produto: ");
    let opcao = +prompt("Escolha uma opção de pagamento:\n1 - 15% de desconto à vista no dinheiro.\n2 - 10% de desconto à vista no débito ou pix.\n3 - Preço normal em até 3x no cartão.\n4 - Acréscimo de 3% para até 5x no cartão.");
    if (opcao == 1) {
        return preco - 0.15 * preco;
    } else if (opcao == 2) {
        return preco - 0.10 * preco;
    } else if (opcao == 3) {
        return preco;
    } else if (opcao == 4) {
        return preco + 0.03 * preco;
    } else {
        return -1;
    }
}

console.log(`O valor a ser pago é: R$${preco},00.`);