import { Contato } from "./contato";

let cliente = new Contato('Jaozin','jaozinbalaseca@gmail.com',986565632);
console.log(cliente);
cliente.alterarnome('Jaozão');
console.log(cliente.obternome());
cliente.alteraremail('jaozabalaseca@gmail.com');
console.log(cliente.obteremail());
cliente.alterartelefone(954652134);
console.log(cliente.obtertelefone());

console.log(cliente);


