### Fazer um container para roda o banco PostgreSQL
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
### Baixar a ferramenta PostBird para testar a conexão com o banco e visualizar os dados

### Instalar AdonisJs
npm i -g @adonisjs/cli

### Gerar a tabela no banco
adonis migration:run
### Resetar os dados dentro das tabelas
adonis migration:rollback

### criar arquivo chamando .env no root e colar 

HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=qMyewmTm5zBxqReEMKZve4a6ASwKJrMy
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=12345
DB_DATABASE=DB_DEV_COBRA_CAFEINADA
HASH_DRIVER=bcrypt

MAIL_HOST= smtp.mailtrap.io
MAIL_PORT= 2525
MAIL_USERNAME= c60c4aec9c6316
MAIL_PASSWORD= 1d714f3778766b

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


