### COMANDO PARA GERAR JS ###
- O arquivo de exemplo => index.ts
- digite na linha de comando */ tsc src/index.ts /*
- Explicando acima tsc seria typescript 
- Explicando acima src/index.ts o caminho do arquivo .ts


### NÃO GERAR O ARQUIVO CASO TENHA ALGUM ERRO ###
- tsc src/index.ts --noEmitOnError

### Comando abaixo direciona a conversão do .ts para o local correto (public) ### 
- tsc src/index.ts --outDir public


### watchMode ###
- tsc src/script.ts -w ou --watchMode

### Criando o arquivo tsconfig.json ###
- tsc --init

- Após criar o arquivo acima, dentro do projeto para copilar para .js
- Digite apenas */ tsc /* ele copila todos os arquivos .ts

### Quais arquivos escolher para compilar ###

- Dentro do tsconfig.json depois do compilerOptions  colocaremos: 
- Excluir apenas o a pasta src
"exclude": [
    "src"
  ]
- Excluir apenas o outro.ts
"exclude": [
    "src/outro.ts"
  ]

- Excluir todos os arquivos que tiver .dev.ts
"exclude": [
    "**/*.dev.ts"
  ]
- Excluir node_modules
"exclude": [
    "node_modules"
  ]

- Incluir apenas os arquivos abaixo:
 "include": [
    "src/index.ts"
  ]
- Incluir apenas os arquivos abaixo dentro da pasta src:
 "include": [
    "src/*"
  ]
- Incluir apenas os arquivos abaixo dentro da pasta src e outro arquivo:
 "include": [
    "src/*",
    "app.ts"
  ]


### ENTENDENDO O TARGET ###
- Para escolher a versão do ecma javascript final ou es5 ou es6

### LIB ###


### outDIr e rooDir ###
- Apontar os arquivos para copilar e direcionar os arquivos de saida
### REMOVER COMENTARIOS - noEmit - noEmitOnError - e outros ###

- Deixar como true no arquivo tsconfig.json
- "removeComments": true,

- noEmit, ELe não gera os arquivos
- noEmitOnError Ele não Emite nada com erro ""noEmitOnError": true, " 

- Variavel criada e não usada
- "noUnusedLocals": true,  

- Parametro que não está sendo usado
- "noUnusedParameters": true,

- 





