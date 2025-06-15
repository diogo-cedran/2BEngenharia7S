# Inventory System - Avaliação Prática

Este é o repositório para a Avaliação Prática do Segundo Bimestre da matéria Tópicos em Programação. O projeto consiste em um sistema de gerenciamento de inventário com funcionalidades de autenticação, usuários, produtos e categorias.

### Trabalho realizado por:

- Diogo Tizolim Cedran - RA: 22014212-2

## 🚀 Tecnologias Utilizadas

O backend deste projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **NestJS:** Um framework progressivo Node.js para a construção de aplicativos corporativos eficientes, confiáveis e escaláveis.
*   **TypeScript:** Um superset tipado de JavaScript que compila para JavaScript simples.
*   **TypeORM:** Um ORM (Object Relational Mapper) para TypeScript e JavaScript que suporta vários bancos de dados.
*   **PostgreSQL:** Um poderoso sistema de banco de dados relacional de código aberto.
*   **Docker & Docker Compose:** Utilizados para conteinerização e orquestração dos serviços da aplicação e banco de dados.
*   **JWT (JSON Web Tokens):** Para autenticação e autorização de usuários.
*   **Swagger (OpenAPI):** Para documentação interativa da API.

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Pré-requisitos:**
    *   Docker e Docker Compose instalados.

2.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/2BEngenharia7S.git
    cd 2BEngenharia7S
    ```

3.  **Configurar Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto (ao lado do `docker-compose.yml`) e configure suas variáveis de ambiente para o banco de dados e JWT. Exemplo:
    ```env
    POSTGRES_HOST=db
    POSTGRES_PORT=5432
    POSTGRES_USER=user
    POSTGRES_PASSWORD=password
    POSTGRES_DB=inventorydb
    JWT_SECRET=suaChaveSecretaMuitoSegura
    JWT_EXPIRATION_TIME=1h
    PORT=3000
    ```

4.  **Iniciar os serviços Docker:**
    No diretório raiz do projeto, execute o seguinte comando para construir as imagens e iniciar os contêineres:
    ```bash
    docker-compose up --build
    ```
    Isso irá baixar as dependências, construir a aplicação NestJS e iniciar o banco de dados PostgreSQL.

## 🔐 Autenticação e Autorização (JWT)

O sistema utiliza JWT para proteger as rotas da API.

### 1. Cadastro de Usuário (`/auth/signup`)

*   **Rota:** `POST http://localhost:3000/auth/signup`
*   **Corpo da Requisição (JSON):**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@example.com",
      "password": "senhaSegura123",
      "role": "user" // ou "admin" (em minúsculas)
    }
    ```
*   **Atribuição de Papéis (Roles):**
    *   Você pode definir o papel do usuário como `"admin"` ou `"user"` durante o cadastro.
    *   Usuários com papel `ADMIN` têm acesso total às rotas protegidas por `ADMIN` e `USER`.
    *   Usuários com papel `USER` têm acesso às rotas protegidas por `USER`.

### 2. Login e Obtenção do Token (`/auth/login`)

*   **Rota:** `POST http://localhost:3000/auth/login`
*   **Corpo da Requisição (JSON):**
    ```json
    {
      "email": "email@example.com",
      "password": "password"
    }
    ```
*   **Resposta:** Retorna um `access_token` que deve ser usado nas requisições subsequentes.

### 3. Usando o Token JWT

Para acessar rotas protegidas, inclua o `access_token` no cabeçalho `Authorization` da requisição, no formato `Bearer <seu_token>`.

**Exemplo de Cabeçalho HTTP:**
`Authorization: Bearer seu.token.jwt.aqui`

## 📚 Documentação da API com Swagger

A documentação interativa da API está disponível via Swagger UI após a aplicação estar em execução.

*   **URL do Swagger UI:** `http://localhost:3000/api`

### Rotas Disponíveis (Resumo)

*   **Auth (`/auth`):**
    *   `POST /auth/signup`: Registrar um novo usuário.
    *   `POST /auth/login`: Fazer login e obter o token JWT.
*   **Users (`/users`):**
    *   `POST /users`: Criar um novo usuário (ADMIN).
    *   `GET /users`: Listar todos os usuários (ADMIN).
    *   `GET /users/profile`: Obter o perfil do usuário autenticado.
    *   `GET /users/:id`: Obter detalhes de um usuário específico (ADMIN).
    *   `PUT /users/:id`: Atualizar um usuário (ADMIN ou o próprio usuário).
    *   `DELETE /users/:id`: Remover um usuário (ADMIN).
*   **Products (`/products`):**
    *   `POST /products`: Criar um novo produto (ADMIN).
    *   `GET /products`: Listar todos os produtos (ADMIN, USER).
    *   `GET /products/:id`: Visualizar detalhes de um produto específico (ADMIN, USER).
    *   `GET /products/by-category/:categoryName`: Listar produtos por nome de categoria (ADMIN, USER).
    *   `PUT /products/:id`: Atualizar um produto (ADMIN).
    *   `DELETE /products/:id`: Remover um produto (ADMIN).
*   **Categories (`/categories`):**
    *   `POST /categories`: Criar uma nova categoria (ADMIN).
    *   `GET /categories`: Listar todas as categorias (ADMIN).
    *   `GET /categories/:id`: Visualizar detalhes de uma categoria específica (ADMIN).
    *   `PUT /categories/:id`: Atualizar uma categoria (ADMIN).
    *   `DELETE /categories/:id`: Deletar uma categoria (ADMIN).

### Screenshot do Swagger UI
![Image](https://github.com/user-attachments/assets/9d67b721-3f5f-4771-b070-e197148720b6)

## 🧪 Teste de Requisições com Postman

Para facilitar os testes, você pode usar a coleção de requisições HTTP do Postman que foi exportada.

*   **Arquivo da Coleção:** `Inventory-System.postman_collection.json`

Você pode importar este arquivo diretamente no Postman para ter todas as requisições pré-configuradas, incluindo exemplos de corpo de requisição e headers de autenticação (lembre-se de atualizar o token JWT manualmente após o login). Isso pode ser uma alternativa ou complemento ao uso do Swagger UI para testar as rotas.
