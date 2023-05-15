function verificaTrianguloRetangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
 
    if (
      a * a === b * b + c * c ||
      b * b === a * a + c * c ||
      c * c === a * a + b * b
    ) {
      return true;
    } else {
      return false;
    }
  }
 
  // Solicita os valores dos lados do triângulo ao usuário
  const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
  const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
  const ladoC = parseFloat(prompt("Digite o valor do lado C:"));
 
  // Verifica se os valores formam um triângulo retângulo
  const formaTrianguloRetangulo = verificaTrianguloRetangulo(ladoA, ladoB, ladoC);
 
  // Exibe o resultado
  if (formaTrianguloRetangulo) {
    console.log("Os valores formam um triângulo retângulo.");
  } else {
    console.log("Os valores não formam um triângulo retângulo.");
  }
