# PokéAPI - React & Vite

Este é um projeto desenvolvido em **React** com **TypeScript** e **Vite**, focado em consumir e exibir dados da [PokéAPI](https://pokeapi.co/).

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para JavaScript.
- [Vite](https://vitejs.dev/) - Ferramenta de build super rápida e servidor de desenvolvimento.

## 📋 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema antes de prosseguir:

- [Node.js](https://nodejs.org/) (recomendado versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes padrão do Node)

## ⚙️ Configuração das Variáveis de Ambiente

Para que o projeto consiga realizar as requisições para a API corretamente, é necessário configurar a URL base da PokeAPI. 

No diretório raiz do projeto, crie ou edite o arquivo `.env` com a seguinte variável:

```env
VITE_POKEAPI_BASE_URL=https://pokeapi.co/api/v2/
```

> **Aviso:** Como estamos utilizando o Vite, é obrigatório que as variáveis de ambiente comecem com o prefixo `VITE_` para que elas sejam injetadas de forma segura e acessíveis no código do navegador (`client-side`). Caso contrário, elas retornarão `undefined`.

## 📦 Instalação e Execução

1. Clone o repositório ou acesse o diretório principal do projeto onde o arquivo `package.json` está localizado.
2. Instale as dependências executando:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. O terminal exibirá uma URL local (geralmente `http://localhost:5173/`). Abra-a no seu navegador para ver a aplicação rodando!

## 💡 Como Consumir a API no Código

Para acessar a variável de ambiente dentro dos componentes React, basta usar a sintaxe `import.meta.env`:

```tsx
const baseUrl = import.meta.env.VITE_POKEAPI_BASE_URL;

// Exemplo buscando os dados do Pikachu
fetch(`${baseUrl}pokemon/pikachu`)
  .then(response => response.json())
  .then(data => console.log(data));
```

## 📁 Estrutura Base do Projeto

Abaixo, a organização simplificada dos arquivos:

```text
├── src/               # Código-fonte principal da aplicação
│   ├── assets/        # Imagens, SVGs e afins
│   ├── App.tsx        # Componente raiz
│   └── main.tsx       # Ponto de entrada do React
├── public/            # Arquivos estáticos (favicon, etc)
├── .env               # Variáveis de ambiente
├── index.html         # Template HTML principal
├── package.json       # Dependências e scripts do projeto
└── vite.config.ts     # Configurações do Vite
```
