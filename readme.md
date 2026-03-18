Projeto Back end em nodejs

criou readme.md

inciou controle de versão via git

```bash
git init
```
para os alunos que o git inicou na branch `master` use o comando abaixo:
```bash
git checkout -b main
```

apos executar o primeiro commit
``
git add .
git commit -m "primeiro commit"
```
para ver as alterações pendentes:
```
git status 
```

padrao que será utilizado de import foi alterado de 
commons.js para module.
Alteração feita no package.json , codigo abaixo:

```json
    "type": "module",
```
foi criado um script para inicialização do projeto, com o nome de `dev`, script abaixo como exemplo:
```
"scripts": {
    "dev": "node --watch ./src/server.js"
  },
```
como iniciar o projeto, acesse o terminal e execute o comando abaixo:
```bash
    npm run dev
```