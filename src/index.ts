const input1 = document.querySelector('#numero1') as HTMLInputElement;
const input2 = document.querySelector('#numero2') as HTMLInputElement;
const button = document.querySelector('#calc') as HTMLButtonElement
const res = document.querySelector('#res') as HTMLElement



function Calcular(input1: number,input2:number){
    return input1 + input2
}

button.addEventListener('click', function(){
    res.innerHTML = Calcular(+input1.value, parseInt(input2.value)).toString();
})

const inputLetra = document.querySelector('#inputLetra') as HTMLInputElement;
const resInputLetra = inputLetra.value;
const letra = document.querySelector('#letra') as HTMLElement
const resLetra = document.querySelector('#resLetra') as HTMLElement

function FirstLetter(inputLetra:string): any{
    const firstletter = inputLetra.charAt(0).toUpperCase();
    return  resLetra.innerHTML = `${firstletter}${inputLetra.substring(1)}`
}

const resultado = FirstLetter('silas')
console.log(resultado)


//teste