🏎️ F1 DevOps CI/CD — Desafio Técnico

Este projeto faz parte de um Desafio DevOps (Nível Médio) e tem como objetivo demonstrar, na prática, a criação de uma pipeline CI/CD completa, desde o desenvolvimento local até o deploy automatizado em produção na AWS.

🎯 Objetivo do Projeto

Desenvolver uma API Node.js simples

Utilizar PostgreSQL real como banco de dados

Containerizar a aplicação com Docker

Orquestrar ambiente local com Docker Compose

Provisionar infraestrutura com Terraform

Automatizar CI/CD com GitHub Actions

Realizar deploy automático em uma EC2 na AWS

🧱 Arquitetura da Solução

Node.js (Express) — API REST

PostgreSQL — Banco de dados relacional

Docker / Docker Compose — Containerização

GitHub Actions — CI/CD

Terraform — Infraestrutura como Código

AWS EC2 — Ambiente de produção

📂 Estrutura do Projeto

.
├── .github/workflows
│   ├── ci.yml
│   ├── build-push.yml
│   └── deploy.yml
├── app
│   ├── src
│   ├── test
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── terraform
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── user_data.sh
├── docker-compose.yml
├── .env.example
├── README.md
└── docs/images

🐳 Docker Compose — Ambiente Local

O ambiente local é composto por:

API Node.js

PostgreSQL com healthcheck

Subindo os containers

docker compose up -d --build

Containers em execução

Healthcheck local da API (porta 3001)

curl http://localhost:3001/health

🗄️ Banco de Dados — PostgreSQL

O projeto utiliza PostgreSQL real, rodando em container.

Validação da conexão com o banco

docker compose exec db psql -U postgres -d f1 -c "SELECT now();"

🧪 CI — Integração Contínua (Pull Request)

O workflow de CI é executado automaticamente ao abrir um Pull Request para a branch main.

Etapas do CI

Build da imagem Docker

Execução da aplicação

Healthcheck via endpoint /health

📦 Build & Push da Imagem Docker

Após o merge na branch main, o pipeline:

Builda a imagem Docker

Publica no GitHub Container Registry (GHCR)

☁️ Infraestrutura com Terraform

A infraestrutura é provisionada utilizando Terraform, incluindo:

VPC

Subnet pública

Internet Gateway

Security Group

EC2 Ubuntu

Instalação automática do Docker

Inicialização e validação

terraform init
terraform validate


Terraform Plan (detecção de drift)

O Terraform detecta alterações feitas fora do controle dele (ex: stop/start manual da EC2):

🖥️ AWS EC2 — Produção

A aplicação é executada em uma instância EC2 provisionada via Terraform.

🚀 Deploy Automático (CD)

Após o build da imagem:

O workflow de Deploy acessa a EC2 via SSH

Faz pull da imagem no GHCR

Executa o container Docker

🌐 Acessando a Aplicação em Produção

A aplicação fica disponível na porta 3000 da instância EC2.

curl http://<IP_PUBLICO_DA_EC2>:3000/health

🔁 Portas Utilizadas
Ambiente	Porta
Local	3001
Produção	3000
PostgreSQL	5433
🔐 Variáveis de Ambiente

Exemplo de .env:

PORT=3000
DATABASE_URL=postgres://postgres:postgres@db:5432/f1

🛑 Encerrando a Infraestrutura

Para evitar custos na AWS:

terraform destroy

✅ Conclusão

Este projeto demonstra, de ponta a ponta:

Uso real de CI/CD

Infraestrutura como código

Deploy automatizado

Boas práticas DevOps

Ambiente local e produção bem definidos

📌 Autor: Vinícius Barreto