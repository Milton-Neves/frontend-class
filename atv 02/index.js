function verificarParOuImpar() {
  // Iniciei declarando uma variável de constante, com const, e que não pode ser reatribuída.
  // Usei o parseInt para converter uma string em um número inteiro
  // Usei o getElementById para obter o elemento pelo seu ID.
  const numero = parseInt(document.getElementById("numero").value);
  const resultado1 = document.getElementById("resultado1");

  if (numero % 2 === 0) {
    resultado1.textContent = "O número é par.";
  } else {
    resultado1.textContent = "O número é ímpar.";
  }
}

function calcularIdade() {
  const anoNascimento = parseInt(
    document.getElementById("anoNascimento").value
  );
  const anoAtual = new Date().getFullYear();
  const resultado2 = document.getElementById("resultado2");

  const idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    resultado2.textContent = "A pessoa é maior de idade.";
  } else {
    resultado2.textContent = "A pessoa é menor de idade.";
  }
}

function converterUnidade() {
  // usei parseFloat para converter uma string em um número de ponto flutuante.
  const valor = parseFloat(document.getElementById("valorUnidade").value);
  const unidadeOrigem = document.getElementById("unidadeOrigem").value;
  const unidadeDestino = document.getElementById("unidadeDestino").value;
  const resultado3 = document.getElementById("resultado3");

  const fatoresConversao = {
    metros: 1,
    pes: 3.28084,
  };

  if (unidadeOrigem in fatoresConversao && unidadeDestino in fatoresConversao) {
    const valorConvertido =
      valor *
      (fatoresConversao[unidadeDestino] / fatoresConversao[unidadeOrigem]);
    // Usei o toFixed para definir um número com uma quantidade específica de casas decimais.
    resultado3.textContent = `O valor convertido é ${valorConvertido.toFixed(
      2
    )} ${unidadeDestino}.`;
  } else {
    resultado3.textContent = "Unidades de medida não válidas.";
  }
}

function calcularEmprestimo() {
  const valorEmprestimo = parseFloat(
    document.getElementById("valorEmprestimo").value
  );
  const taxaJurosAnual = parseFloat(
    document.getElementById("taxaJurosAnual").value
  );
  const numeroAnos = parseInt(document.getElementById("numeroAnos").value);
  const resultado4 = document.getElementById("resultado4");

  const taxaJurosMensal = taxaJurosAnual / 12 / 100;
  const numeroParcelas = numeroAnos * 12;
  const valorTotal =
    valorEmprestimo * Math.pow(1 + taxaJurosMensal, numeroParcelas);

  resultado4.textContent = `O valor total a ser pago é ${valorTotal.toFixed(
    2
  )} reais.`;
}

function verificarTriangulo() {
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);
  const resultado5 = document.getElementById("resultado5");

  // && (Operador "E" Lógico): Executa uma ação se ambas as condições forem verdadeiras.
  // === (Operador de Igualdade Estrita): Compara valores, considerando o tipo de dado.

  if (lado1 === lado2 && lado2 === lado3) {
    resultado5.textContent =
      "O triângulo é equilátero (todos os lados são iguais).";
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    resultado5.textContent = "O triângulo é isósceles (dois lados são iguais).";
  } else {
    resultado5.textContent =
      "O triângulo é escaleno (todos os lados são diferentes entre si).";
  }
}
