# PokéAPI Consumer Application

## Visão Geral
Este repositório contém uma aplicação frontend desenvolvida para consumir e apresentar dados da [PokéAPI](https://pokeapi.co/) pública. O projeto foi estruturado como uma *Single-Page Application* (SPA) moderna, com foco em performance, modularidade e manutenibilidade.

## Arquitetura e Tecnologias
O projeto utiliza a seguinte pilha tecnológica:
- **React**: Biblioteca para construção de interfaces baseadas em componentes.
- **TypeScript**: Superconjunto sintático de JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de *build* de nova geração para desenvolvimento ágil e empacotamento otimizado.
- **Tailwind CSS (v4)**: *Framework* CSS utilitário para estilização de interface.

## Pré-requisitos
Certifique-se de que as seguintes dependências estão instaladas no ambiente antes de prosseguir:
- Node.js (versão 18.x ou superior recomendada)
- npm (*Node Package Manager*)

## Configuração de Ambiente
A aplicação depende de variáveis de ambiente para a definição de *endpoints* de API, garantindo flexibilidade nos *deployments*.

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```env
VITE_POKEAPI_BASE_URL=https://pokeapi.co/api/v2/
```

**Nota de Segurança**: Variáveis de ambiente destinadas ao código *client-side* devem obrigatoriamente possuir o prefixo `VITE_`. Variáveis sem este prefixo não serão expostas no *bundle* final.

## Inicialização

1. Clone o repositório e navegue até o diretório do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor local de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse a aplicação através da URL fornecida na saída do terminal (geralmente `http://localhost:5173/`).

## Exemplo de Integração
Para utilizar as variáveis de ambiente dentro da aplicação React, referencie `import.meta.env`. Abaixo segue uma implementação padrão para o consumo da API:

```typescript
const baseUrl = import.meta.env.VITE_POKEAPI_BASE_URL;

fetch(`${baseUrl}pokemon/pikachu`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log('Dados recebidos com sucesso:', data))
  .catch(error => console.error('Falha ao obter dados:', error));
```

## Estrutura do Projeto
```text
├── src/
│   ├── assets/        # Arquivos estáticos (imagens, ícones)
│   ├── routes/        # Lógica de roteamento da aplicação
│   ├── App.tsx        # Componente raiz
│   ├── index.css      # Folha de estilos global e diretivas do Tailwind
│   └── main.tsx       # Ponto de entrada da aplicação
├── public/            # Arquivos servidos publicamente
├── .env               # Configuração de ambiente
├── package.json       # Metadados e dependências do projeto
└── vite.config.ts     # Configuração do empacotador (Vite)
```
