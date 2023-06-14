
console.log(triangulo(5, 4, 3));
console.log(triangulo(4, 4, 4));
let hp = 5;
let c1 = 3;
let c2 = 3;

if (triangulo(hp, c1, c2)) {
  document.write('<p>É um triângulo!</p>');
} else {
  document.write('<p>Não é um triângulo!</p>'); 
}

if (par(33)) {
  document.write('<p>É par!</p>');
} else {
  document.write('<p>É ímpar!</p>'); 
}

let x = +prompt('Número (>=0)');
document.write(
`<p>O fatorial de ${x} é ${fatorial(x)}</p>`);
      