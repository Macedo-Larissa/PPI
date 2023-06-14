function getDataPorExtenso(data) {
    // Divide a data em dia, mês e ano
    const partesData = data.split('/');
    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]);
    const ano = parseInt(partesData[2]);
 
    // Arrays com os nomes dos meses e dos números
    const nomesMeses = [
      'janeiro', 'fevereiro', 'março', 'abril',
      'maio', 'junho', 'julho', 'agosto',
      'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const numerosPorExtenso = [
      '', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis',
      'sete', 'oito', 'nove', 'dez', 'onze', 'doze',
      'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete',
      'dezoito', 'dezenove', 'vinte', 'vinte e um',
      'vinte e dois', 'vinte e três', 'vinte e quatro',
      'vinte e cinco', 'vinte e seis', 'vinte e sete',
      'vinte e oito', 'vinte e nove', 'trinta', 'trinta e um'
    ];
 
    // Monta a data por extenso
    const dataPorExtenso = dia + ' de ' + nomesMeses[mes - 1] + ' de ' + ano;
 
    return dataPorExtenso;
  }
 
  // Exemplo de uso da função
  const data = prompt('Digite uma data no formato dd/mm/aaaa:');
  const dataPorExtenso = getDataPorExtenso(data);
  console.log('Data por extenso:', dataPorExtenso);
