# API - Pet & Events Management

## Descrição

Esta API foi construída utilizando NestJS e TypeORM, com PostgreSQL como banco de dados, e JWT para autenticação e autorização. A API permite que os usuários:

- Criem e gerenciem perfis com endereço.
- Adicionem e gerenciem pets, incluindo criação, atualização, visualização e remoção.
- Criem e gerenciem eventos, permitindo adicionar participantes e fazer upload de fotos.

## Funcionalidades

### Usuário

- **Propriedades**: `id`, `email`, `isActive`, `createdAt`, `address`, `pets`, `events`.
- **Rotas**:
  - **POST** `/users`: Cria um novo usuário.
  - **GET** `/users`: Lista todos os usuários.
  - **GET** `/users/profile`: Visualiza o perfil do usuário autenticado.
  - **GET** `/users/:id`: Exibe os detalhes de um usuário específico.
  - **PATCH** `/users/:id`: Atualiza os dados de um usuário.
  - **DELETE** `/users/:id`: Realiza uma exclusão lógica do usuário.

### Pets

- **Propriedades**: `id`, `nome`, `idade`, `raça`, `dono`.
- **Rotas**:
  - **POST** `/pets`: Cria um novo pet (usuário autenticado).
  - **GET** `/pets`: Lista todos os pets (com filtro opcional por raça).
  - **GET** `/pets/my-pets`: Lista os pets do usuário autenticado.
  - **GET** `/pets/:id`: Exibe os detalhes de um pet específico.
  - **PATCH** `/pets/:id`: Atualiza um pet existente (somente para o dono).
  - **DELETE** `/pets/:id`: Remove um pet (somente para o dono).

### Eventos

- **Propriedades**: `id`, `nome`, `data`, `participantes`, `foto`.
- **Rotas**:
  - **POST** `/events`: Cria um novo evento.
  - **GET** `/events`: Lista todos os eventos.
  - **POST** `/events/:id/participate`: Adiciona um participante a um evento.
  - **POST** `/events/:id/upload-photo`: Faz upload de uma foto para o evento.
  - **GET** `/events/photo/:filename`: Obtém uma foto do evento pelo nome do arquivo.
  - **GET** `/events/:id`: Exibe os detalhes de um evento específico.
  - **PATCH** `/events/:id`: Atualiza um evento existente.
  - **DELETE** `/events/:id`: Remove um evento.

### Endereços

- **Propriedades**: `id`, `rua`, `cidade`, `estado`, `cep`, `país`.
- **Rotas**:
  - **POST** `/address`: Adiciona um novo endereço ao perfil do usuário.
  - **GET** `/address`: Lista todos os endereços do usuário autenticado.
  - **GET** `/address/:id`: Exibe os detalhes de um endereço específico.
  - **PATCH** `/address/:id`: Atualiza um endereço existente.
  - **DELETE** `/address/:id`: Remove um endereço.

## Autenticação

- **POST** `/auth/login`: Autentica um usuário e retorna o token JWT.

## Tecnologias Utilizadas

### Dependências
- **NestJS** (Core e diversos módulos como `@nestjs/jwt`, `@nestjs/typeorm`, etc.)
- **TypeORM**: ORM para o banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **bcrypt**: Para hashing de senhas.
- **class-validator** e **class-transformer**: Para validação e transformação de dados.
- **multer**: Upload de arquivos (imagens).
- **pg**: Cliente PostgreSQL.

### Dev Dependencies
- **TypeScript**: Para tipagem estática e desenvolvimento.
- **ESLint** e **Prettier**: Para padronização e formatação de código.
- **Jest** e **Supertest**: Para testes unitários e de integração.
- **ts-jest**: Para suporte a testes com TypeScript.
- **ts-loader**, **ts-node**, **tsconfig-paths**: Para transpilar e rodar o código TypeScript.

## Como rodar a aplicação

1. Clone o repositório:
   ```bash
   git clone https://github.com/dev-anderson-rodrigues/api-users-demo.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com as variáveis de ambiente necessárias, como:
   ```bash
   DATABASE_URL=postgres://user:password@localhost:5432/yourdb
   JWT_SECRET=your_jwt_secret
   ```

4. Rodar migrações do banco de dados:
   ```bash
   npm run typeorm migration:run
   ```

5. Inicie o servidor:
   ```bash
   npm run start
   ```

## Documentação da API

A documentação da API pode ser acessada via Swagger, disponível em `/api`.
