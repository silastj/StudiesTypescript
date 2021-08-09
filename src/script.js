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
//TYPES EM FUNÇÕES ANONIMAS
//CASO PASSE  STRING E NUMBER, FAZEMOS UMA VERIFICAÇÃO
var palavras = ['casa', 'carro', 'moto', 'apartamento', 90];
palavras.forEach(function (pala) {
    if (typeof pala === 'string') {
        console.log(pala.toUpperCase());
    }
    else {
        console.log(pala);
    }
});
//TYPES EM OBJETOS e 
//PROPRIEDADES OPCIONAIS que aceite apenas nome,
var user = {
    name: 'Silas',
    idade: 37
};
var valores = {
    automovel: 'Carro',
    imovel: 'Chacara'
};
function Dados(usuario, // ? não é obrigatorio
valores) {
    return "O nome \u00E9 " + usuario.name + " e sua idade: " + usuario.idade + ". Ele tem os bens: " + valores.imovel + " e " + valores.automovel;
}
console.log(Dados(user, valores));
//PARAMETROS COM VARIOS TIPOS
//UNION TYPES
var numberShoes = 41;
numberShoes = '41';
function wichShoes(numberShoes) {
    if (typeof numberShoes === 'string') {
        console.log(numberShoes.toUpperCase());
    }
    else {
        console.log(numberShoes);
    }
}
wichShoes(90);
wichShoes('90');
//NÁ FUNÇÃO ABAIXO IREMOS RECEBER i e podemos usar o type acima e tb podemos 
//USAR O type na return da função
function NNidade(i) {
    return i;
}
function NameComplete(usuario) {
    return "O " + usuario.nome + " tem a " + usuario.idade;
}
console.log(NameComplete({
    nome: 'Silas',
    idade: 37
}));
