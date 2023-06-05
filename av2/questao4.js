function triangulo (a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a == b && b == c) {
            return "É um triângulo equilátero.";
        } else if (a == b || a == c || b == c) {
            return "É um triângulo isósceles."
        } else if (a != b && b != c && c != a) {
            return "É um triângulo escaleno.";
        }
    } else {
        return "Não é um triângulo.";
    }
}

console.log(triangulo(2, 5, 3));
console.log(triangulo(6, 6, 6));
console.log(triangulo(4, 5, 3));
console.log(triangulo(7, 7, 3));