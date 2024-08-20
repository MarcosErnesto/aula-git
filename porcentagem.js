var valor = parseFloat(prompt("Digite o valor a converter: "));
var porcentagem = parseInt(prompt("Digite a porcentagem q deseja encontrar: "));
var porcentagemDecimal = porcentagem / 100;
var resultado = valor * porcentagemDecimal;
console.log("O Resultado é: " + resultado )