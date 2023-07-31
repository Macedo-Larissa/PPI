import { Produto, ItemPedido, Pedido } from "./questao3";

const produto1 = new Produto(123, 50, "Camiseta");
const produto2 = new Produto(456, 100, "Calça Jeans");
const produto3 = new Produto(789, 200, "Tênis");

const item1 = new ItemPedido(produto1, 2);
const item2 = new ItemPedido(produto2, 1);
const item3 = new ItemPedido(produto3, 3);

const pedido = new Pedido();
pedido.adicionar_item(item1);
pedido.adicionar_item(item2);
pedido.adicionar_item(item3);

const total_pedido = pedido.obter_total();
console.log(`Total do pedido: R$${total_pedido.toFixed(2)}`);