# 🦞LobSter API
Pipeline configurado:
![CI Status]


## 📘 Descrição do Projeto
LobSter é uma API backend desenvolvida em TypeScript para gerenciar pratos de um sistema Web do nosso restaurante feito no semestre passado na matéria de frontend-devops. O projeto consiste em uma API RESTful com autenticação JWT, documentação Swagger e integração com um frontend que consome os dados em tempo real.  

O objetivo é criar um módulo complementar ao site do semestre anterior, permitindo cadastros e leituras de pratos de forma segura e estruturada.


🎯 Tecnologias Utilizadas

- **Linguagem:** TypeScript  
- **Banco de Dados:** Sequelize (MySQL/PostgreSQL/SQLite)  
- **Autenticação:** JWT (JSON Web Tokens)  
- **Documentação:** Swagger (OpenAPI)  
- **Containerização:** Docker para API e banco de dados  
- **Integração Contínua:** GitHub Actions (Continuous Deployment)  


🧩 Funcionalidades da API

- CRUD completo para gerenciar pratos:
  - Criar prato
  - Listar pratos
  - Atualizar prato
  - Remover prato
- Todas as requisições exigem autenticação via token JWT
- Rotas documentadas e testáveis via Swagger  
- Comunicação em tempo real com o frontend

🐳 Docker
O projeto utiliza containers Docker para padronizar o ambiente da aplicação e do banco de dados.

Como fazer funcionar localmente:
# 1️⃣ Entrar na pasta do projeto
cd /caminho para seu projeto

# 2️⃣ Instalar dependências do Node.js
npm install

# 3️⃣ Instalar TypeScript globalmente (opcional, mas recomendado)
npm install -g typescript

# 4️⃣ Rodar o servidor em modo de desenvolvimento
npm run dev

# 5️⃣ Acessar Swagger no navegador (Acesso da URL da api)
# Abra: http://localhost:3001/api-docs




