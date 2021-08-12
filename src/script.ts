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

//TYPES EM OBJETOS e 
//PROPRIEDADES OPCIONAIS que aceite apenas nome,
let user = {
    name: 'Silas',
    idade: 37
}
let valores = {
    automovel : 'Carro',
    imovel: 'Chacara'
}
function Dados(
    usuario:{name:string, idade?:number}, // ? não é obrigatorio
    valores:{automovel: string, imovel:string}
    ) {
        return `O nome é ${usuario.name} e sua idade: ${usuario.idade}. Ele tem os bens: ${valores.imovel} e ${valores.automovel}`
    }
console.log(Dados(user, valores))

//PARAMETROS COM VARIOS TIPOS
//UNION TYPES
let numberShoes: number | string = 41
numberShoes = '41'

function wichShoes(numberShoes: string | number){
    if(typeof numberShoes === 'string'){
        console.log(numberShoes.toUpperCase())
    }else{
        console.log(numberShoes)
    }
}
wichShoes(90)
wichShoes('90')

//CRIAÇÃO DE TYPE
//CRIAMOS UM TIPO IDADE QUE RECEBE STRING OU NUMBER
 type Idade = string | number;

 //NÁ FUNÇÃO ABAIXO IREMOS RECEBER i e podemos usar o type acima e tb podemos 
 //USAR O type na return da função
 function NNidade(i: Idade) : Idade{
     return i;
 } 

 // USAMOS MAIS EM OBJETO
//  type User ={
//      nome: string,
//      idade: number
//  }
 //OU INTERFACE 
 //A DIFERENÇA É QUE O INTERFACE PODEMOS INCLUIR TYPE DEPOIS
 // JÁ NO TYPE NÃO PODEMOS INCLUIR MAIS.

 interface User {
     nome: string,
 }
 interface User {
     idade: number
 }
 function NameComplete(usuario: User){
     return `O ${usuario.nome} tem ${usuario.idade}`;
 }

 console.log(NameComplete({
     nome:'Silas',
     idade:37
 }))

 //TYPE ASSERTIONS 
 //DEIXAR O TYPESCRIPT MAIS ESPECIFICO
 //IREMOS FALAR PARA  O TYPESCRIPT QUE ELE É UM INPUT

 const diceField = document.querySelector('.campo') as HTMLInputElement;
 console.log(diceField.value)

//TYPE LITERAIS, RESUMINDO VC FIXA OS VALORES QUE IRÁ RECEBER
//INTERFACE LITERAIS
interface Quadro {
    material: string,
    alinhamento: 'top' | 'right' | 'bottom' | 'left'
}

function createPainting(material: string, alinhamento: string){
    return material + ''+ alinhamento
}
console.log(createPainting('casa', 'top'))

type Opcoes = {
    width: number,
    height : number
}
function configurar(props: Opcoes| 'auto'){
    return 'Olá'
}
configurar('auto')
configurar({width: 10, height:20})

type Dados ={
    url: string,
    method: 'GET' | "POST"
}

let req: Dados = {
    url: 'https://www.google.com',
    method:"GET"
}

function getURL(url:string, method:"GET" | "POST"){

}
getURL(req.url, req.method)

//TYPE PARA FUNCTION
//TIPANDO UMA FUNÇÃO

type DiceSomar = (n1:number, n2:number) => number;
const Somando: DiceSomar = (n1, n2) => {
    return n1 + n2;
}

//RETURN VOID
//QUANDO FUNÇÃO NÃO TEM NENHUM TIPO DE RETURN 
 function removeElemento(elemento:HTMLElement): void {
     elemento.remove();
 }
 removeElemento(document.getElementById('.teste'));
 
 //OU

 type GenericVoid = () => void; // criaremos um type void
 const functionVoid = () => { // conseguimos trazer um return usando o void
     return 'Aceitou o void'
 }
const resVoid = functionVoid();
console.log(resVoid)

//MÓDULO 3
//WATCHMODE deixa ele convertendo o .ts para .js automatico 
            // TSC SRC/SCRIPT.TS -W

//CRIANDO O ARQUIVO .TSCONFIG.JSON
// ENTENDENDO O TARGET => transformando em es5 ou es6

const es5 = 'es5';
var es66= 'es6';
