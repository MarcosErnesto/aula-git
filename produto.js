var nomeProduto = prompt("Digite o nome do produto");
var quantidadeVendida = parseInt(prompt("Digite a quantidade vendida "));
var valorProduto = parseFloat(prompt("Qual é o valor do produto"));
var valorTotal = quantidadeVendida * valorProduto;
console.log("O seu valor total é de: " + valorTotal);
var desconto = parseFloat(prompt("Qual é o seu porcento de desconto"));
var totalDescontoemR = desconto / 100;
console.log("O seu desconto total é de: " + totalDescontoemR);