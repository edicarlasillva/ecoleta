<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src="https://i.imgur.com/bYSTKIQ.png" alt="Ecoleta" />
</h1>

# ♻️ Ecoleta

O Ecoleta é um Marketplace que conecta empresas/entidades que coletam resíduos orgânicos e inorgânicos com pessoas que precisam descartá-los.

<p align="center">
 <img src="https://i.imgur.com/x4EvkJY.png" alt="Preview da aplicação" />
</p>

<h4 align="center"> 
	Projeto em evolução 🚀
</h4>

### 🚀 Features

- Empresas e entidades podem cadastrar um ponto de coleta
- App mobile para visualização dos pontos de coletas
- Contato com o ponto de coleta via e-mail ou Whatsapp

### 💻 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

### 👷 Como começar

- Ter o **[Node.js](https://nodejs.org/en/)** instalado na máquina;
- Utilizar um gerenciador de pacotes: **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**;
- Ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

1. Clone o projeto:

```bash
  $ git clone https://github.com/edicarlasillva/ecoleta.git
```

2. Excute a aplicação rodando os comandos abaixo:

```bash
  # Instale as dependências
  $ yarn install

  ## Crie o banco de dados
  $ cd server
  $ yarn migrate
  $ yarn seed

  # Inicie a API
  $ yarn dev

  # Inicie a aplicação web
  $ cd web
  $ yarn start

  # Inicie a aplicação mobile
  $ cd mobile
  $ yarn start
```

### 🎉 Como contribuir

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

Feito com amor e dedicação por [Edicarla Silva](https://www.linkedin.com/in/edicarlasilva/) 💜🚀
