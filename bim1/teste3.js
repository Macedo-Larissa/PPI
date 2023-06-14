function triangulo(hp, c1, c2) {
    if (hp > 0 && c1> 0 && c2 > 0){
        return hp ** 2 == c1 ** 2 + c2 ** 2;
    }
    return false;
}

console.log(triangulo(5, 4, 3));
console.log(triangulo(4, 4, 4));