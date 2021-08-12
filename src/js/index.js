"use strict";
var input1 = document.querySelector('#numero1');
var input2 = document.querySelector('#numero2');
var button = document.querySelector('#calc');
var res = document.querySelector('#res');
function Calcular(input1, input2) {
    return input1 + input2;
}
button.addEventListener('click', function () {
    res.innerHTML = Calcular(+input1.value, parseInt(input2.value)).toString();
});
var inputLetra = document.querySelector('#inputLetra');
var resInputLetra = inputLetra.value;
var letra = document.querySelector('#letra');
var resLetra = document.querySelector('#resLetra');
function FirstLetter(inputLetra) {
    var firstletter = inputLetra.charAt(0).toUpperCase();
    return resLetra.innerHTML = "" + firstletter + inputLetra.substring(1);
}
var resultado = FirstLetter('silas');
console.log(resultado);
