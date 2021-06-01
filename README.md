# Módulo Farmácia

## Rodando o Projeto Localmente

```bash
# Levantar módulo farmácia
$ docker-compose up -d

# Criar banco
$ docker-compose run web rake db:create

# Rodar migrações
$ docker-compose run web rake db:migrate

# Popular banco
$ docker-compose run web rake db:seed

# O servidor iniciará na porta:3001 - acesse <http://localhost:3001>
```

# Módulo Hospital

## Rodando o Projeto Backend

```bash
# Instalar as dependências do projeto
$ yarn install

# Criação do banco de dados
É necessário que o profissional que vá instalar  o sistema, crie um banco de dados relacional e adicione as variáveis de ambiente no arquivo .env

ROOT_PASSWORD=
DATABASE=
USER=
PASSWORD=

# Criar modelos das tabelas
$ sequelize db:migrate:all

# Rodar aplicação
$ yarn start

O servidor iniciará na porta:3333- acesse <http://localhost:3333>
```

## Rodando o Projeto Frontend

```bash
# Instalar as dependências do projeto
$ yarn install

# Rodar aplicação
$ yarn start

O servidor iniciará na porta:3000- acesse <http://localhost:3333>
```

# Módulo Auth-API

## Rodando o projeto auth-api

```bash
# Levantar módulo auth-api
$ maven package
$ java -jar target/demo-0.0.1-SNAPSHOT.jar
$ mvn spring-boot:run

# O servidor iniciará na porta:8080 - acesse <http://localhost:8080>
```

# Módulo Dashboard

## Rodando o projeto dashboard

```bash
# Levantar módulo dashboard
$ yarn
$ yarn start

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```
