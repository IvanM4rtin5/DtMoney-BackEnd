# 🚀 API de Gerenciamento de Transações
Este projeto é uma API para gerenciamento de transações financeiras, desenvolvida com **Node.js**, **Express** e **Prisma**. Ele permite que os usuários se registrem, façam login, criem, leiam, atualizem e excluam transações.

[![Node.js](https://img.shields.io/badge/Node.js-18.13.0-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-4.16.2-2D3748?logo=prisma)](https://www.prisma.io/)
[![JWT](https://img.shields.io/badge/JWT-8.5.1-000000?logo=json-web-tokens)](https://jwt.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.0-336791?logo=postgresql)](https://www.postgresql.org/)

---

## � Funcionalidades

- **Autenticação de Usuário:**
  - Registro de novos usuários.
  - Login de usuários existentes com geração de token JWT.

- **Gerenciamento de Transações:**
  - Criação de novas transações.
  - Listagem de todas as transações do usuário.
  - Visualização de uma transação específica.
  - Atualização de uma transação existente.
  - Exclusão de uma transação.

---

## 🛠️ Tecnologias Utilizadas
<div align="left"> <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" /> <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express" /> <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma" /> <img src="https://img.shields.io/badge/JWT-000000?logo=json-web-tokens&logoColor=white" alt="JWT" /> <img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white" alt="PostgreSQL" /> <img src="https://img.shields.io/badge/bcryptjs-4.3.0-000000?logo=bcrypt" alt="bcryptjs" /> <img src="https://img.shields.io/badge/dotenv-16.0.3-000000?logo=dotenv" alt="dotenv" /> <img src="https://img.shields.io/badge/cors-2.8.5-000000?logo=cors" alt="cors" /> </div>

## 🚀 Como Executar o Projeto
Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode verificar a versão instalada com o comando:

```bash
Copy
node -v
```
**Banco de Dados**: Certifique-se de ter um banco de dados configurado (ex: PostgreSQL, MySQL, etc.).

Passos para Configuração
Clone o repositório:

```bash
Copy
git clone https://github.com/IvanM4rtin5/DtMoney-BackEnd.git
```
Entre na sua pasta:
```
cd seu-repositorio
```
Instale as dependências:

```bash
Copy
npm install
```
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como a conexão com o banco de dados e a chave secreta para o JWT.

```env
Copy
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your_jwt_secret"
Execute as migrações do Prisma:
```

```bash
Copy
npx prisma migrate dev --name init
```
Inicie o servidor:

```bash
Copy
npm start
```
O servidor estará rodando em http://localhost:3000.

## 📂 Estrutura do Projeto
```Copy
prisma/
├── migrations/           # Migrações do banco de dados
├── dev.db               # Banco de dados SQLite (se aplicável)
└── schema.prisma        # Schema do Prisma
src/
├── assets/              # Imagens e outros recursos
├── config/              # Configurações do projeto
│   ├── auth.js          # Configurações de autenticação
│   └── prismaClient.js  # Configurações do Prisma Client
├── controllers/         # Controladores das rotas
│   ├── UserController.js # Controlador de usuários
│   └── TransactionController.js # Controlador de transações
├── middleware/          # Middlewares
│   └── auth.js          # Middleware de autenticação
├── models/              # Modelos de dados
│   ├── Transaction.js   # Modelo de transação
│   └── User.js          # Modelo de usuário
├── routes/              # Rotas da API
│   ├── auth.routes.js   # Rotas de autenticação
│   ├── index.js         # Ponto de entrada das rotas
│   └── transaction.routes.js # Rotas de transações
├── services/            # Serviços de negócio
│   └── TransactionService.js # Serviço de transações
├── utils/               # Utilitários
│   └── errors.js        # Tratamento de erros
└── server.js            # Ponto de entrada da aplicação
.gitignore               # Arquivos ignorados pelo Git
README.md               # Documentação do projeto
package-lock.json        # Versões das dependências
package.json             # Dependências do projeto
```

## 🔗 Links Relacionados

- Frontend do Projeto: [DT Money - Frontend](https://github.com/IvanM4rtin5/DtMoney-Frontend)


## 💡 Meu Esforço e Dedicação
Este projeto foi desenvolvido com muito esforço e dedicação, buscando demonstrar minhas habilidades como desenvolvedor FullStack. Alguns dos desafios que enfrentei e superei incluem:

Integração com Banco de Dados: Configuração e uso do Prisma para gerenciar o banco de dados.

Autenticação Segura: Implementação de autenticação JWT com bcrypt para criptografia de senhas.

Gerenciamento de Transações: Criação de uma API robusta para gerenciar transações financeiras.

Acredito que este projeto reflete minha capacidade de trabalhar com tecnologias modernas e entregar soluções de alta qualidade.

## 📧 Contato
Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me enviar uma mensagem:

**Nome**: Ivan Martins

**E-mail**: ivanmarti.alves@gmail.com

**LinkedIn**: [https://www.linkedin.com/in/ivan-martins-alves/]


### ⭐ Imagens do Projeto
Aqui estão algumas imagens que ilustram o funcionamento do projeto:

 ### ⭐ Testes no Insomnia
![Image](https://github.com/IvanM4rtin5/DtMoney-BackEnd/blob/main/src/assets/image/Insomnia%2030_01_2025%2012_21_11.png)

### ⭐ Testes no Insomnia
![Image](https://github.com/IvanM4rtin5/DtMoney-BackEnd/blob/main/src/assets/image/Insomnia%2030_01_2025%2012_21_49.png)


### ⭐ Banco de Dados no Beekeeper
![Image](https://github.com/IvanM4rtin5/DtMoney-BackEnd/blob/main/src/assets/image/dev.db%20-%20Beekeeper%20Studio%2030_01_2025%2012_26_59.png)

---

Obrigado por visitar meu projeto! Espero que ele demonstre minhas habilidades e meu comprometimento com a excelência no desenvolvimento de software. 😊

---




