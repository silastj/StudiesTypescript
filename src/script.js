// ARRAYS e TIPAGENS ABAIXO
var nomes = ['Silas', 'Santos'];
var nome = ['Silas', 'Santos'];
var idade = [10, 20, 30, 40];
var idades = [10, 20, 30, 40];
var profissao = 'desenvolvedor';
var ano = 37;
var ativo = true;
//ANY em inglês = qualquer
//Usaremos em ultima ocasião
var misturado = ['silas', 10, 20, 30, 40];
//FUNÇÕES ou Parametro de funções
function primeiraLetraM(nome) {
    var oneLetter = nome.charAt(0).toUpperCase();
    return "" + oneLetter + nome.substring(1);
}
console.log(primeiraLetraM('silas'));
// TYPES EM UM RETORNO DE UMA FUNÇÃO
function Somar(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}
console.log(Somar(10, 20));
