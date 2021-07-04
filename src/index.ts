//Comando para criar arquivo final em js
// tsc index.ts

//Comando abaixo direciona a conversão do .ts para o local correto (public)
// tsc src/index.ts --outDir public

//Emitir a conversão sem erro
//tsc src/index.ts --noEmitOnError



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

const inputLetra = document.querySelector('#inputLetra') as HTMLInputElement;
const resInputLetra = inputLetra.value;
const letra = document.querySelector('#letra')
const resLetra = document.querySelector('#resLetra')

function FirstLetter(inputLetra:string): any{
    const firstletter = inputLetra.charAt(0).toUpperCase();
    return  resLetra.innerHTML = `${firstletter}${inputLetra.substring(1)}`
}

const resultado = FirstLetter('silas')
console.log(resultado)
