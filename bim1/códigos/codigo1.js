// Definindo os produtos vendidos como objetos JSON
const produto1 = {
    nome: "Produto 1",
    quantidade: 3,
    preco: 10.99
  };
 
  const produto2 = {
    nome: "Produto 2",
    quantidade: 5,
    preco: 7.5
  };
 
  // Imprimindo as informações dos produtos vendidos
  console.log("Produto 1:");
  console.log("Nome: " + produto1.nome);
  console.log("Quantidade: " + produto1.quantidade);
  console.log("Preço: R$ " + produto1.preco.toFixed(2));
  console.log("\nProduto 2:");
  console.log("Nome: " + produto2.nome);
  console.log("Quantidade: " + produto2.quantidade);
  console.log("Preço: R$ " + produto2.preco.toFixed(2));
 
  // Calculando o preço total das duas vendas
  const precoTotal = produto1.quantidade * produto1.preco + produto2.quantidade * produto2.preco;
 
  // Imprimindo o preço total das duas vendas
  console.log("\nPreço total das duas vendas: R$ " + precoTotal.toFixed(2));
