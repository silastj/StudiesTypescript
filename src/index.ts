//Comando para criar arquivo final em js
// tsc index.ts

//Comando abaixo direciona a conversão do .ts para o local correto (public)
// tsc src/index.ts --outDir public

const input1 = document.querySelector('#numero1') as HTMLInputElement;
const input2 = document.querySelector('#numero2') as HTMLInputElement;
const button = document.querySelector('#calc')
const res = document.querySelector('#res')



function Calcular(input1: number,input2:number){
    return input1 + input2
}

button.addEventListener('click', function(){
    res.innerHTML = Calcular(+input1.value, parseInt(input2.value)).toString();
})

