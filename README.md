# API de Gerenciamento de Transações

Este projeto é uma API para gerenciamento de transações financeiras, desenvolvida com Node.js, Express e Prisma. Ele permite que os usuários se registrem, façam login, criem, leiam, atualizem e excluam transações.

## Funcionalidades

- **Autenticação de Usuário:**
  - Registro de novos usuários.
  - Login de usuários existentes com geração de token JWT.

- **Gerenciamento de Transações:**
  - Criação de novas transações.
  - Listagem de todas as transações do usuário.
  - Visualização de uma transação específica.
  - Atualização de uma transação existente.
  - Exclusão de uma transação.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Prisma** (ORM para banco de dados)
- **bcryptjs** (criptografia de senhas)
- **jsonwebtoken** (autenticação via JWT)
- **dotenv** (gerenciamento de variáveis de ambiente)
- **cors** (habilitar CORS)

## Ferramentas de Desenvolvimento

- **Insomnia**: Utilizado para testar os endpoints da API.
- **Beekeeper Studio**: Utilizado para visualizar e manipular o banco de dados.

## Como Configurar e Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado
- Banco de dados configurado (ex: PostgreSQL, MySQL, etc.)

### Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as dependências:

bash
Copy
npm install
Configure o banco de dados:

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:

env
Copy
DATABASE_URL="sua_url_de_conexao_com_o_banco_de_dados"
JWT_SECRET="sua_chave_secreta_jwt"
Execute as migrações do Prisma para criar as tabelas no banco de dados:

bash
Copy
npx prisma migrate dev --name init
Execute o projeto:

Para rodar em modo de desenvolvimento (com nodemon):

bash
Copy
npm run dev
Para rodar em produção:

bash
Copy
npm start
O servidor estará rodando em http://localhost:3000 (ou na porta configurada).

Testando a API com Insomnia
Para testar os endpoints da API, você pode utilizar o Insomnia. Abaixo estão exemplos de como configurar e testar os endpoints:

Importe a coleção de endpoints:

No Insomnia, crie uma nova coleção e importe os endpoints a partir de um arquivo JSON ou configure manualmente.

Exemplo de requisição de registro de usuário:

Método: POST

URL: http://localhost:3000/register

Body (JSON):

json
Copy
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
Exemplo de requisição de login:

Método: POST

URL: http://localhost:3000/login

Body (JSON):

json
Copy
{
  "email": "joao@example.com",
  "password": "senha123"
}
Exemplo de requisição para criar uma transação:

Método: POST

URL: http://localhost:3000/transactions

Headers:

json
Copy
{
  "Authorization": "Bearer <seu_token_jwt>"
}
Body (JSON):

json
Copy
{
  "title": "Salário",
  "amount": 3000,
  "type": "income",
  "category": "Trabalho"
}
Visualizando o Banco de Dados com Beekeeper Studio
Para visualizar e manipular o banco de dados, você pode utilizar o Beekeeper Studio:

Conecte-se ao banco de dados:

Abra o Beekeeper Studio e crie uma nova conexão com as credenciais do seu banco de dados.

Utilize a URL configurada no arquivo .env (DATABASE_URL).

Explore as tabelas:

Após conectar, você poderá visualizar as tabelas criadas pelo Prisma, como User e Transaction.

Estrutura do Projeto
src/: Contém o código fonte do projeto.

controllers/: Contém os controladores para gerenciar transações e usuários.

config/: Configurações do projeto, como autenticação.

prisma/: Configurações e modelos do Prisma.

server.js: Ponto de entrada da aplicação.

Exemplos de Uso
Registro de Usuário
Endpoint: POST /register

Request Body:

json
Copy
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
Response:

json
Copy
{
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  },
  "token": "seu_token_jwt"
}
Login de Usuário
Endpoint: POST /login

Request Body:

json
Copy
{
  "email": "joao@example.com",
  "password": "senha123"
}
Response:

json
Copy
{
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  },
  "token": "seu_token_jwt"
}
Criação de Transação
Endpoint: POST /transactions

Request Body:

json
Copy
{
  "title": "Salário",
  "amount": 3000,
  "type": "income",
  "category": "Trabalho"
}
Response:

json
Copy
{
  "id": 1,
  "title": "Salário",
  "amount": 3000,
  "type": "income",
  "category": "Trabalho",
  "userId": 1,
  "createdAt": "2023-10-01T12:00:00.000Z"
}
Imagens do Projeto
Aqui estão algumas imagens que ilustram o funcionamento do projeto:

Testes no Insomnia
Testes no Insomnia

Visualização do Banco de Dados no Beekeeper
Banco de Dados no Beekeeper

Nota: Certifique-se de adicionar as imagens na pasta images do seu repositório e atualizar os caminhos das imagens no README.md.
