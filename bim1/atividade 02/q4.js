var preco = window.prompt("Digite o preço do produto:");
var percentual = window.prompt("Digite o % de desconto:");

var precofinal = preco - (preco * (percentual/100));

console.log(precofinal);