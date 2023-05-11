# Projeto de Gerenciamento de Entregas

Esse é um repositório de exemplo para um projeto de gerenciamento de entregas utilizando Prisma ORM.

## Tecnologias Utilizadas

Prisma ORM
PostgreSQL
Node + SOLID

## O projeto segue a seguinte arquitetura:

- Deliveryman: modelo que representa os entregadores do sistema. Cada entregador possui um nome de usuário, senha e uma lista de entregas atribuídas.
- Clients: modelo que representa os clientes do sistema. Cada cliente possui um nome de usuário, senha e uma lista de entregas solicitadas.
- Deliveries: modelo que representa as entregas do sistema. Cada entrega possui um item a ser entregue, uma data de criação e, opcionalmente, uma data de finalização. Cada entrega pode estar associada a um cliente e/ou um entregador.

## Configuração do Banco de Dados

O projeto utiliza o PostgreSQL como banco de dados. Para configurar a conexão com o banco de dados, é necessário definir a variável de ambiente DATABASE_URL.

## Como Executar o Projeto

Para executar o projeto, siga os seguintes passos:

- Clone o repositório
- Instale as dependências utilizando o comando npm install
- Defina a variável de ambiente DATABASE_URL com a URL do banco de dados
- Execute o comando npx prisma migrate dev para criar as tabelas no banco de dados
- Execute o comando npm run dev para iniciar o servidor

## Licença

Esse projeto é distribuído sob a licença MIT.