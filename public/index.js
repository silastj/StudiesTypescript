//Comando para criar arquivo final em js
// tsc index.ts
//Comando abaixo direciona a conversão do .ts para o local correto (public)
// tsc src/index.ts --outDir public
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
