let x = 0;
let y = 5;

console.log(x);
console.log(y);

x = --y //primeiro ocorre a operação, depois a atribuição

console.log(x);
console.log(y);

y = 8;
x = y++; //primeiro ocorre a atribuição, depois a operação

console.log(x);
console.log(y);

x = x * (y + 4 ** 2);

console.log(x);
console.log(y);

const nav = navigator.userAgent;
let navegador = '';
console.log(nav);

if (nav.indexOf('Chrome') > -1) {
    navegador = 'Chrome, Safari ou Edge';
} else if (nav.indexOf('Firefox') > -1) {
    navegador = 'Firefox';
} else {
    navegador = 'Outro navegador';
}
console.log(navegador);

var mf = window.prompt("Digite sua média final:");

if (mf >= 60) {
    //window.alert("Você foi aprovado!");
    console.log("Você foi aprovado!");
} else if (mf >= 20){
    console.log("Você está em prova final!");
} else {
    console.log("Você está reprovado!");
}