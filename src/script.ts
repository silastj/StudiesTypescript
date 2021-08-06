// ARRAYS e TIPAGENS ABAIXO
const nomes: string[]  = ['Silas','Santos']
const nome: Array<string> = ['Silas','Santos']

const idade: Array<number> = [10,20,30,40]
const idades: number[] = [10,20,30,40]

const profissao: string = 'desenvolvedor'
const ano: number = 37
const ativo: boolean = true;

//ANY em inglês = qualquer
//Usaremos em ultima ocasião
const misturado: Array<any> = ['silas',10,20,30,40]

//FUNÇÕES ou Parametro de funções
function primeiraLetraM(nome:string) :string{
    const oneLetter = nome.charAt(0).toUpperCase();
    return `${oneLetter}${nome.substring(1)}` 
}
console.log(primeiraLetraM('silas'))

// TYPES EM UM RETORNO DE UMA FUNÇÃO
function Somar(numeroUm:number ,numeroDois:number) : number {
    return numeroUm + numeroDois
}
console.log(Somar(10,20))

//TYPES EM FUNÇÕES ANONIMAS
//CASO PASSE  STRING E NUMBER, FAZEMOS UMA VERIFICAÇÃO
const palavras = ['casa', 'carro', 'moto', 'apartamento',90]
palavras.forEach((pala) => {
    if(typeof pala === 'string'){
        console.log(pala.toUpperCase())
    }else{
        console.log(pala)
    }
})

//TYPES EM OBJETOS










